/**
 * 健康樂活與智慧醫療照護聯盟｜網頁報名 API
 * 功能：寫入「網頁報名」分頁、自動產生報名序號、檢查重複電子郵件
 *
 * 欄位：A 時間戳記｜B 電子郵件｜C 同意｜D 姓名｜E 電話｜F 服務單位｜G 職稱｜H 得知管道｜I 報名序號
 */
const SHEET_NAME = '網頁報名';
const SERIAL_PREFIX = 'AHMCI-';   // 序號前綴，可自行修改
const SERIAL_DIGITS = 3;          // 序號位數：AHMCI-001
const SERIAL_COL = 9;             // I 欄

function getSheet_() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet) throw new Error('找不到分頁：' + SHEET_NAME);
  const header = String(sheet.getRange(1, SERIAL_COL).getValue()).trim();
  // 空白或「第 1 欄」「Column 1」這類預設標題都改成「報名序號」
  if (header === '' || /^第\s*\d+\s*欄$/.test(header) || /^column\s*\d+$/i.test(header)) {
    sheet.getRange(1, SERIAL_COL).setValue('報名序號');
  }
  return sheet;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function normalizeEmail_(email) {
  return String(email || '').trim().toLowerCase();
}

/** 回傳已報名的 {serial, row}，沒有則回傳 null */
function findByEmail_(sheet, email) {
  const target = normalizeEmail_(email);
  const last = sheet.getLastRow();
  if (!target || last < 2) return null;
  const values = sheet.getRange(2, 2, last - 1, SERIAL_COL - 1).getValues(); // B..I
  for (let i = 0; i < values.length; i++) {
    if (normalizeEmail_(values[i][0]) === target) {
      return { row: i + 2, serial: values[i][SERIAL_COL - 2] || '' };
    }
  }
  return null;
}

function makeSerial_(n) {
  return SERIAL_PREFIX + String(n).padStart(SERIAL_DIGITS, '0');
}

function nextSerialNumber_(sheet) {
  const last = sheet.getLastRow();
  if (last < 2) return 1;
  const serials = sheet.getRange(2, SERIAL_COL, last - 1, 1).getValues();
  let max = 0;
  serials.forEach(([s]) => {
    const m = String(s).match(/(\d+)\s*$/);
    if (m) max = Math.max(max, parseInt(m[1], 10));
  });
  return Math.max(max, last - 1) + 1;
}

/** GET ?action=check&email=xxx → 前端輸入電郵時即時檢查 */
function doGet(e) {
  try {
    const p = (e && e.parameter) || {};
    if (p.action === 'check') {
      const found = findByEmail_(getSheet_(), p.email);
      return json_({ ok: true, duplicate: Boolean(found), serial: found ? found.serial : '' });
    }
    return json_({ ok: true, message: 'registration api ready' });
  } catch (err) {
    return json_({ ok: false, message: String(err.message || err) });
  }
}

/** POST（JSON 字串）→ 寫入報名資料並回傳序號 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (data.website) return json_({ ok: true, serial: '' }); // honeypot：機器人
    const email = String(data.email || '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json_({ ok: false, message: '電子郵件格式不正確' });
    }

    lock.waitLock(20000); // 避免同時送出拿到相同序號
    const sheet = getSheet_();
    const found = findByEmail_(sheet, email);
    if (found) {
      return json_({ ok: false, duplicate: true, serial: found.serial,
                     message: '此電子郵件已完成報名' });
    }

    const serial = makeSerial_(nextSerialNumber_(sheet));
    const ts = Utilities.formatDate(new Date(), 'Asia/Taipei', 'yyyy/MM/dd HH:mm:ss');
    sheet.appendRow([
      ts, email, data.consent || '同意', data.name || '', data.phone || '',
      data.organization || '', data.jobTitle || '', data.source || '', serial
    ]);
    SpreadsheetApp.flush();
    return json_({ ok: true, serial: serial });
  } catch (err) {
    return json_({ ok: false, message: String(err.message || err) });
  } finally {
    try { lock.releaseLock(); } catch (_) {}
  }
}

/** 一次性：替已存在但沒有序號的資料補上序號（在編輯器手動執行一次即可） */
function backfillSerials() {
  const sheet = getSheet_();
  const last = sheet.getLastRow();
  if (last < 2) return;
  const range = sheet.getRange(2, SERIAL_COL, last - 1, 1);
  const values = range.getValues();
  let n = 0;
  values.forEach(([s]) => { const m = String(s).match(/(\d+)\s*$/); if (m) n = Math.max(n, +m[1]); });
  const out = values.map(([s]) => [s ? s : makeSerial_(++n)]);
  range.setValues(out);
}

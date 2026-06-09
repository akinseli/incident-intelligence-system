/**
 * Google Sheets Writer
 *
 * Handles writing processed incident records
 * into the active intelligence worksheet.
 */

/**
 * Writes incident records to the target sheet.
 *
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet
 * @param {Array<Array<any>>} records
 */
function writeIncidentRecords(sheet, records) {

  if (!sheet) {
    throw new Error("Target sheet not supplied.");
  }

  if (!records || records.length === 0) {
    Logger.log("No records to write.");
    return;
  }

  const startRow = sheet.getLastRow() + 1;

  const startColumn = 1;

  const numberOfRows = records.length;

  const numberOfColumns = records[0].length;

  sheet
    .getRange(
      startRow,
      startColumn,
      numberOfRows,
      numberOfColumns
    )
    .setValues(records);

  Logger.log(
    `${records.length} incident record(s) written successfully.`
  );
}

/**
 * Creates worksheet headers if they do not exist.
 *
 * Run once when creating a new sheet.
 *
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet
 */
function initializeSheetHeaders(sheet) {

  if (!sheet) {
    throw new Error("Sheet is required.");
  }

  const headers = [

    "ID",

    "Incident Type",

    "State",

    "LGA",

    "Town / City",

    "Village / Community",

    "Email Date",

    "Processed Date",

    "Incident Date",

    "Incident Time",

    "Posted Time",

    "Summary",

    "Casualties",

    "Deaths",

    "Response Action",

    "Authorities",

    "Source URL"
  ];

  const existingHeaders = sheet
    .getRange(1, 1, 1, headers.length)
    .getValues()[0];

  const hasHeaders = existingHeaders.some(
    value => value !== ""
  );

  if (hasHeaders) {
    Logger.log(
      "Headers already exist."
    );
    return;
  }

  sheet
    .getRange(
      1,
      1,
      1,
      headers.length
    )
    .setValues([headers]);

  sheet.setFrozenRows(1);

  Logger.log(
    "Worksheet headers created."
  );
}

/**
 * Creates a new monthly worksheet.
 *
 * Example:
 * June-2026
 *
 * @returns {GoogleAppsScript.Spreadsheet.Sheet}
 */
function createMonthlySheet() {

  const spreadsheet =
    SpreadsheetApp.getActiveSpreadsheet();

  const now = new Date();

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const sheetName =
    `${monthNames[now.getMonth()]}-${now.getFullYear()}`;

  let sheet =
    spreadsheet.getSheetByName(sheetName);

  if (!sheet) {

    sheet =
      spreadsheet.insertSheet(sheetName);

    initializeSheetHeaders(sheet);

    Logger.log(
      `Created worksheet: ${sheetName}`
    );
  }

  return sheet;
}

/**
 * Returns latest worksheet.
 *
 * If none exists, creates one.
 *
 * @returns {GoogleAppsScript.Spreadsheet.Sheet}
 */
function getLatestWorksheet() {

  const spreadsheet =
    SpreadsheetApp.getActiveSpreadsheet();

  const sheets =
    spreadsheet.getSheets();

  if (!sheets.length) {
    return createMonthlySheet();
  }

  return sheets[sheets.length - 1];
}
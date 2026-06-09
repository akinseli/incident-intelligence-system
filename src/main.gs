/**
 * Incident Intelligence System
 *
 * Main workflow:
 * 1. Read Google Alert emails
 * 2. Extract article URLs
 * 3. Scrape article content
 * 4. Generate summary
 * 5. Extract structured incident details
 * 6. Write results to Google Sheets
 * 7. Mark email as processed
 */

function fetchIncidentReports() {

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  const sheets = spreadsheet.getSheets();

  if (!sheets || sheets.length === 0) {
    Logger.log("No sheets found.");
    return;
  }

  const targetSheet = sheets[sheets.length - 1];

  let idCounter = targetSheet.getLastRow();

  const searchQuery =
    "from:googlealerts-noreply@google.com";

  const threads =
    GmailApp.search(searchQuery, 0, 20);

  Logger.log(
    `Found ${threads.length} Google Alert threads`
  );

  const records = [];

  const processedLabel =
    getOrCreateProcessedLabel();

  threads.forEach(thread => {

    const messages = thread.getMessages();

    messages.forEach(message => {

      try {

        const subject =
          message.getSubject() || "";

        const body =
          message.getPlainBody() || "";

        const emailDate =
          message.getDate();

        const incidentTopic =
          detectIncidentTopic(subject);

        if (incidentTopic === "Unknown") {
          return;
        }

        const urls =
          extractUrls(body);

        if (!urls.length) {
          return;
        }

        const articleUrl =
          extractRealUrl(urls[0]);

        if (!isValidUrl(articleUrl)) {

          Logger.log(
            `Invalid URL skipped: ${articleUrl}`
          );

          return;
        }

        Logger.log(
          `Processing: ${articleUrl}`
        );

        const articleContent =
          fetchArticleContent(articleUrl);

        const summary =
          extractSnippetSummary(
            articleContent,
            body
          );

        const details =
          extractIncidentDetails(
            body,
            summary,
            emailDate
          );

        idCounter++;

        records.push([
          idCounter,
          incidentTopic,
          details.state,
          details.location,
          details.townOrCity,
          details.villageOrCommunity,
          emailDate,
          new Date(),
          details.incidentDate,
          details.incidentTime,
          emailDate,
          summary,
          details.casualties,
          details.deaths,
          details.responseAction,
          details.authorities,
          articleUrl
        ]);

        markMessageProcessed(
          message,
          processedLabel
        );

      } catch (error) {

        Logger.log(
          "Processing Error: " + error
        );
      }

    });

  });

  if (records.length > 0) {

    writeIncidentRecords(
      targetSheet,
      records
    );

    Logger.log(
      `${records.length} records written`
    );

  } else {

    Logger.log(
      "No new incident reports found."
    );
  }
}

/**
 * Creates or returns the
 * ProcessedAlerts label.
 *
 * @returns {GmailLabel}
 */
function getOrCreateProcessedLabel() {

  const labelName =
    "ProcessedAlerts";

  let label =
    GmailApp.getUserLabelByName(
      labelName
    );

  if (!label) {

    label =
      GmailApp.createLabel(
        labelName
      );
  }

  return label;
}

/**
 * Marks email as processed.
 *
 * @param {GmailMessage} message
 * @param {GmailLabel} label
 */
function markMessageProcessed(
  message,
  label
) {

  try {

    message.markRead();

    if (label) {
      message.getThread()
        .addLabel(label);
    }

    // Optional
    // message.moveToTrash();

  } catch (error) {

    Logger.log(
      "Unable to mark message processed: " +
      error
    );
  }
}
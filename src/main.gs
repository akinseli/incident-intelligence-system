/**

* Incident Intelligence System
*
* Main Orchestrator
*
* Workflow:
* 1. Retrieve Google Alert emails
* 2. Extract article URLs
* 3. Scrape article content
* 4. Generate summary
* 5. Extract incident details
* 6. Save to Google Sheets
* 7. Mark emails as processed
     */

function fetchIncidentReports() {

const targetSheet = getLatestWorksheet();

let idCounter = targetSheet.getLastRow();

const threads = getGoogleAlertThreads();

const records = [];

Logger.log(
`Processing ${threads.length} Google Alert thread(s)`
);

threads.forEach(thread => {

```
const messages =
  getThreadMessages(thread);

messages.forEach(message => {

  try {

    const emailData =
      extractMessageData(message);

    const subject =
      emailData.subject;

    const body =
      emailData.body;

    const emailDate =
      emailData.date;

    // Determine incident category
    const incidentTopic =
      detectIncidentTopic(subject);

    if (
      !incidentTopic ||
      incidentTopic === "Unknown"
    ) {
      return;
    }

    // Extract URLs from alert body
    const urls =
      extractUrls(body);

    if (!urls || urls.length === 0) {

      Logger.log(
        "No URLs found in message."
      );

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
      `Processing article: ${articleUrl}`
    );

    // Scrape article
    const articleContent =
      fetchArticleContent(articleUrl);

    // Generate summary
    const summary =
      extractSnippetSummary(
        articleContent,
        body
      );

    // Extract intelligence
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

    // Mark processed
    markMessageProcessed(message);

  } catch (error) {

    Logger.log(
      "Processing Error: " +
      error
    );
  }

});
```

});

if (records.length === 0) {

```
Logger.log(
  "No new incident reports found."
);

return;
```

}

writeIncidentRecords(
targetSheet,
records
);

Logger.log(
`${records.length} record(s) written successfully.`
);
}

/**

* Manual test runner.
*
* Execute this function from
* Apps Script when testing.
  */
  function runIncidentCollection() {

fetchIncidentReports();
}

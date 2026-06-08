/**
 * Generates a concise incident summary.
 *
 * Priority:
 * 1. Use scraped article content.
 * 2. Fall back to Google Alert email body.
 * 3. Return "Unknown" if nothing useful exists.
 *
 * @param {string} articleContent
 * @param {string} emailBody
 * @returns {string}
 */
function extractSnippetSummary(articleContent, emailBody) {

  // Prefer article content if available
  if (articleContent && articleContent.length > 50) {
    return buildSummaryFromArticle(articleContent);
  }

  // Fallback to email content
  return buildSummaryFromEmail(emailBody);
}

/**
 * Creates a summary from scraped article text.
 *
 * @param {string} articleContent
 * @returns {string}
 */
function buildSummaryFromArticle(articleContent) {

  const sentences = articleContent
    .split(".")
    .map(sentence => sentence.trim())
    .filter(sentence => sentence.length > 0);

  if (sentences.length === 0) {
    return "Unknown";
  }

  return sentences
    .slice(0, 3)
    .join(". ") + ".";
}

/**
 * Creates a summary from the Google Alert email body.
 *
 * @param {string} emailBody
 * @returns {string}
 */
function buildSummaryFromEmail(emailBody) {

  if (!emailBody) {
    return "Unknown";
  }

  const lines = emailBody
    .split("\n")
    .map(line => line.trim())
    .filter(line => isUsefulAlertLine(line));

  if (lines.length > 1) {
    return lines[1];
  }

  if (lines.length > 0) {
    return lines[0];
  }

  return "Unknown";
}

/**
 * Removes Google Alert boilerplate lines.
 *
 * @param {string} line
 * @returns {boolean}
 */
function isUsefulAlertLine(line) {

  if (!line) {
    return false;
  }

  const ignoredPatterns = [
    "=== News -",
    "results for [",
    "Google Alerts",
    "Manage Alerts",
    "Create Alert",
    "Edit this alert",
    "View all results"
  ];

  return !ignoredPatterns.some(pattern =>
    line.includes(pattern)
  );
}
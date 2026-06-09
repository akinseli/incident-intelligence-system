/**
 * Gmail Alert Fetcher
 *
 * Handles:
 * - Google Alert searches
 * - Thread retrieval
 * - Message retrieval
 * - Processed label management
 * - Message status updates
 */

const GMAIL_CONFIG = {

  ALERT_SENDER:
    "googlealerts-noreply@google.com",

  PROCESSED_LABEL:
    "ProcessedAlerts",

  MAX_THREADS:
    20
};

/**
 * Returns Google Alert threads.
 *
 * @returns {GmailThread[]}
 */
function getGoogleAlertThreads() {

  const searchQuery =
    `from:${GMAIL_CONFIG.ALERT_SENDER}`;

  const threads = GmailApp.search(
    searchQuery,
    0,
    GMAIL_CONFIG.MAX_THREADS
  );

  Logger.log(
    `Found ${threads.length} alert thread(s)`
  );

  return threads;
}

/**
 * Returns all messages from a thread.
 *
 * @param {GmailThread} thread
 * @returns {GmailMessage[]}
 */
function getThreadMessages(thread) {

  if (!thread) {
    return [];
  }

  return thread.getMessages();
}

/**
 * Creates or retrieves
 * the ProcessedAlerts label.
 *
 * @returns {GmailLabel}
 */
function getOrCreateProcessedLabel() {

  let label =
    GmailApp.getUserLabelByName(
      GMAIL_CONFIG.PROCESSED_LABEL
    );

  if (!label) {

    label =
      GmailApp.createLabel(
        GMAIL_CONFIG.PROCESSED_LABEL
      );
  }

  return label;
}

/**
 * Marks a message as processed.
 *
 * @param {GmailMessage} message
 */
function markMessageProcessed(message) {

  try {

    const label =
      getOrCreateProcessedLabel();

    message.markRead();

    message.getThread()
      .addLabel(label);

  } catch (error) {

    Logger.log(
      "Failed to mark message processed: " +
      error
    );
  }
}

/**
 * Moves a processed message
 * to trash.
 *
 * Optional.
 *
 * @param {GmailMessage} message
 */
function moveMessageToTrash(message) {

  try {

    message.moveToTrash();

  } catch (error) {

    Logger.log(
      "Failed to move message to trash: " +
      error
    );
  }
}

/**
 * Returns message metadata.
 *
 * @param {GmailMessage} message
 * @returns {Object}
 */
function extractMessageData(message) {

  return {

    subject:
      message.getSubject() || "",

    body:
      message.getPlainBody() || "",

    date:
      message.getDate(),

    threadId:
      message.getThread().getId(),

    messageId:
      message.getId()
  };
}
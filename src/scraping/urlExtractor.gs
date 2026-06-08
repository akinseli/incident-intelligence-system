/**
 * Extracts the real destination URL from
 * Google Alert redirect links.
 *
 * Example:
 * https://www.google.com/url?url=https%3A%2F%2Fexample.com%2Fnews&id=123
 *
 * becomes:
 * https://example.com/news
 *
 * @param {string} googleUrl
 * @returns {string}
 */
function extractRealUrl(googleUrl) {
  if (!googleUrl) {
    return "";
  }

  try {
    const match = googleUrl.match(/[?&]url=([^&]+)/i);

    if (match && match[1]) {
      return decodeURIComponent(match[1]);
    }

    return googleUrl;
  } catch (error) {
    Logger.log("URL extraction error: " + error);
    return googleUrl;
  }
}

/**
 * Validates that a URL is usable.
 *
 * @param {string} url
 * @returns {boolean}
 */
function isValidUrl(url) {
  if (!url) return false;

  return /^https?:\/\/.+/i.test(url);
}

/**
 * Extracts all URLs from a text block.
 *
 * Useful for parsing Google Alert emails.
 *
 * @param {string} text
 * @returns {Array}
 */
function extractUrls(text) {
  if (!text) return [];

  const matches = text.match(/https?:\/\/[^\s]+/g);

  return matches || [];
}
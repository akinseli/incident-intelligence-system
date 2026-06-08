/**
 * Fetches and extracts readable content from a news article.
 *
 * Steps:
 * 1. Downloads the webpage.
 * 2. Removes scripts and styles.
 * 3. Attempts to extract content from:
 *    - <main>
 *    - <article>
 *    - <p> tags
 * 4. Cleans remaining HTML.
 * 5. Returns a concise article body.
 *
 * @param {string} url
 * @returns {string}
 */
function fetchArticleContent(url) {
  try {
    const response = UrlFetchApp.fetch(url, {
      muteHttpExceptions: true,
      followRedirects: true
    });

    const statusCode = response.getResponseCode();

    if (statusCode !== 200) {
      Logger.log(`Failed to fetch article. Status: ${statusCode}`);
      return "No relevant content found.";
    }

    let html = response.getContentText();

    html = removeScriptsAndStyles(html);

    let content = extractMainContent(html);

    if (!content) {
      content = extractParagraphContent(html);
    }

    content = cleanHtmlContent(content);

    return content || "No relevant content found.";

  } catch (error) {
    Logger.log("Error fetching article content: " + error);

    return "Error fetching content.";
  }
}

/**
 * Removes scripts and styles from HTML.
 *
 * @param {string} html
 * @returns {string}
 */
function removeScriptsAndStyles(html) {
  return html
    .replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, "")
    .replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, "");
}

/**
 * Attempts to extract content from
 * common article containers.
 *
 * @param {string} html
 * @returns {string}
 */
function extractMainContent(html) {

  const selectors = [
    /<main[^>]*>([\s\S]*?)<\/main>/i,
    /<article[^>]*>([\s\S]*?)<\/article>/i
  ];

  for (let i = 0; i < selectors.length; i++) {
    const match = html.match(selectors[i]);

    if (match && match[1]) {
      return match[1];
    }
  }

  return "";
}

/**
 * Extracts text from paragraph tags
 * if no article/main section is found.
 *
 * @param {string} html
 * @returns {string}
 */
function extractParagraphContent(html) {

  const paragraphs = html.match(/<p[^>]*>([\s\S]*?)<\/p>/gi);

  if (!paragraphs) {
    return "";
  }

  return paragraphs
    .join(" ")
    .replace(/<\/?p[^>]*>/gi, "");
}

/**
 * Cleans HTML and normalizes text.
 *
 * @param {string} content
 * @returns {string}
 */
function cleanHtmlContent(content) {

  content = content
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

  return limitArticleLength(content, 5);
}

/**
 * Limits article content to the first
 * few sentences to avoid oversized
 * sheet entries.
 *
 * @param {string} text
 * @param {number} sentenceCount
 * @returns {string}
 */
function limitArticleLength(text, sentenceCount) {

  if (!text) {
    return "";
  }

  return text
    .split(".")
    .slice(0, sentenceCount)
    .join(".")
    .trim() + ".";
}
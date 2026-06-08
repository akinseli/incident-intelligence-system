/**
 * Incident Intelligence Extraction Engine
 *
 * Extracts structured intelligence from
 * unstructured news content.
 */

/**
 * Main extraction function.
 *
 * @param {string} body
 * @param {string} fallbackDescription
 * @param {Date} emailDate
 * @returns {Object}
 */
function extractIncidentDetails(body, fallbackDescription, emailDate) {

  const details = {
    incidentType: "Unknown",
    state: "Unknown",
    location: "Unknown",
    townOrCity: "Unknown",
    villageOrCommunity: "Unknown",
    incidentDate: "Unknown",
    incidentTime: "Unknown",
    casualties: "Unknown",
    deaths: "Unknown",
    responseAction: "Unknown",
    authorities: "Unknown",
    description: "Unknown"
  };

  if (!body) {
    return details;
  }

  details.incidentType = detectIncidentType(body);

  const locationInfo = detectLocation(body);

  details.state = locationInfo.state;
  details.location = locationInfo.location;
  details.townOrCity = locationInfo.townOrCity;
  details.villageOrCommunity = locationInfo.villageOrCommunity;

  details.description =
    fallbackDescription && fallbackDescription.length > 20
      ? fallbackDescription
      : "Detailed incident summary unavailable.";

  details.incidentDate = extractIncidentDate(body, emailDate);
  details.incidentTime = extractIncidentTime(body);

  details.casualties = extractCasualties(body);
  details.deaths = extractDeaths(body);

  details.responseAction = extractResponseAction(body);
  details.authorities = extractAuthorities(body);

  Logger.log(
    "Extracted Incident Details: " +
      JSON.stringify(details)
  );

  return details;
}

/**
 * Detects incident category.
 *
 * @param {string} text
 * @returns {string}
 */
function detectIncidentType(text) {

  const normalizedText = text.toLowerCase();

  const matchedType = INCIDENT_TOPICS.find(topic =>
    normalizedText.includes(topic.toLowerCase())
  );

  return matchedType || "Unknown";
}

/**
 * Detects state, LGA, town and village.
 *
 * Expected structure:
 *
 * nigeriaLocations = {
 *   lagos: {
 *      state: "Lagos",
 *      lgas: [],
 *      townsAndCities: [],
 *      villagesAndCommunities: []
 *   }
 * }
 *
 * @param {string} text
 * @returns {Object}
 */
function detectLocation(text) {

  const result = {
    state: "Unknown",
    location: "Unknown",
    townOrCity: "Unknown",
    villageOrCommunity: "Unknown"
  };

  if (!text) {
    return result;
  }

  const lowerText = text.toLowerCase();

  for (const key in nigeriaLocations) {

    const stateData = nigeriaLocations[key];

    // Match state name
    if (
      stateData.state &&
      containsWord(lowerText, stateData.state.toLowerCase())
    ) {
      result.state = stateData.state;
    }

    // Match LGA
    if (stateData.lgas) {

      const matchedLga = stateData.lgas.find(lga =>
        containsWord(lowerText, lga.toLowerCase())
      );

      if (matchedLga) {
        result.location = matchedLga;

        if (result.state === "Unknown") {
          result.state = stateData.state;
        }
      }
    }

    // Match Town / City
    if (stateData.townsAndCities) {

      const matchedTown = stateData.townsAndCities.find(town =>
        containsWord(lowerText, town.toLowerCase())
      );

      if (matchedTown) {
        result.townOrCity = matchedTown;

        if (result.state === "Unknown") {
          result.state = stateData.state;
        }
      }
    }

    // Match Village / Community
    if (stateData.villagesAndCommunities) {

      const matchedVillage =
        stateData.villagesAndCommunities.find(village =>
          containsWord(lowerText, village.toLowerCase())
        );

      if (matchedVillage) {
        result.villageOrCommunity = matchedVillage;

        if (result.state === "Unknown") {
          result.state = stateData.state;
        }
      }
    }
  }

  return result;
}

/**
 * Word boundary helper.
 *
 * Prevents:
 * "age" matching "Agege"
 *
 * @param {string} text
 * @param {string} word
 * @returns {boolean}
 */
function containsWord(text, word) {

  const escapedWord = word.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );

  const regex = new RegExp(
    "\\b" + escapedWord + "\\b",
    "i"
  );

  return regex.test(text);
}
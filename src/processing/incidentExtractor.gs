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

/**
 * Extract incident date from article text.
 *
 * @param {string} text
 * @param {Date} emailDate
 * @returns {string}
 */
function extractIncidentDate(text, emailDate) {

  const datePatterns = [

    /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}\b/i,

    /\b\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{4}\b/i,

    /\b\d{1,2}-\d{1,2}-\d{4}\b/,

    /\b\d{1,2}\/\d{1,2}\/\d{4}\b/,

    /\b(\d{1,2})(th|st|nd|rd)?\s+of\s+
    (January|February|March|April|May|June|July|August|September|October|November|December),?\s+\d{4}\b/ix,

    /\b(\d{1,2})(th|st|nd|rd)?\s+
    (January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{4}\b/ix,

    /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}\b/i,

    /\bJust now\b/i
  ];

  for (const pattern of datePatterns) {

    const match = text.match(pattern);

    if (match) {
      return match[0];
    }
  }

  if (/Yesterday/i.test(text)) {
    const yesterday = new Date();

    yesterday.setDate(
      yesterday.getDate() - 1
    );

    return yesterday.toDateString();
  }

  if (/Today/i.test(text)) {
    return new Date().toDateString();
  }

  const lastDayMatch = text.match(
    /Last\s+(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)/i
  );

  if (lastDayMatch) {

    const dayName = lastDayMatch[1];

    const weekDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    const targetDay =
      weekDays.indexOf(dayName);

    const currentDate = new Date();

    const calculatedDate =
      new Date(currentDate);

    calculatedDate.setDate(
      currentDate.getDate() -
      ((currentDate.getDay() - targetDay + 7) % 7 || 7)
    );

    return calculatedDate.toDateString();
  }

  if (emailDate instanceof Date) {
    return emailDate.toDateString();
  }

  return "Unknown";
}

/**
 * Extract incident time.
 *
 * @param {string} text
 * @returns {string}
 */
function extractIncidentTime(text) {

  const timePatterns = [

    /\b\d{1,2}:\d{2}\s?(AM|PM)\b/i,

    /\b\d{1,2}:\d{2}\s?(A\.M\.|P\.M\.)\b/i,

    /\b\d{1,2}[.:]\d{2}\s?(AM|PM)\b/i,

    /\b\d{1,2}:\d{2}\b/,

    /\bmidnight\b/i,

    /\bnoon\b/i,

    /\b(Early|Late)\s+
    (morning|afternoon|evening|night)\b/ix,

    /\b(
      This\smorning|
      Earlier\stoday|
      Last\snight|
      Yesterday\safternoon|
      A\sfew\shours\sago|
      Moments\sago|
      At\sdawn|
      At\sdusk
    )\b/ix
  ];

  for (const pattern of timePatterns) {

    const match = text.match(pattern);

    if (match) {
      return match[0];
    }
  }

  return "Unknown";
}

/**
 * Extract casualty information.
 *
 * @param {string} text
 * @returns {string}
 */
function extractCasualties(text) {

  const casualtyPatterns = [

    /\b(\d+|several|many|multiple|dozens|hundreds)\s+(people\s+)?(killed|dead|casualties|fatalities|feared dead)\b/i,

    /\b(death toll|fatalities|casualties)\s+(rises to|reported at|stands at)\s+(\d+)\b/i,

    /\b(at least|over|more than|approximately)\s+(\d+)\s+(dead|killed|casualties|fatalities)\b/i,

    /\b(a number of|some|a few|numerous|countless)\s+(casualties|fatalities|victims|killed|dead)\b/i,

    /\b(\d+|several|many|multiple|dozens|hundreds)\s+(people\s+)?(injured|wounded|hurt)\b/i,

    /\b(survivors with|some sustained)\s+(critical|minor|severe)\s+injuries\b/i,

    /\b(at least|over|more than|approximately)\s+(\d+)\s+(injured|wounded|hurt)\b/i,

    /\b(a number of|some|a few|numerous|countless)\s+(injuries|injured|wounded|hurt)\b/i
  ];

  for (const pattern of casualtyPatterns) {

    const match = text.match(pattern);

    if (match) {
      return match[0];
    }
  }

  return "Unknown";
}

/**
 * Extract death information.
 *
 * @param {string} text
 * @returns {string}
 */
function extractDeaths(text) {

  const deathPatterns = [

    /\b(\d+|several|many|multiple|dozens|hundreds|thousands)\s+(people\s+)?(killed|dead|fatalities|casualties|feared dead|confirmed dead|confirmed killed)\b/i,

    /\b(death toll|fatalities|casualties)\s+(rises to|reported at|stands at|increases to|climbs to|now at)\s+(\d+)\b/i,

    /\b(at least|over|more than|approximately|around|about|close to|nearly)\s+(\d+)\s+(dead|killed|fatalities|casualties)\b/i,

    /\b(a number of|some|a few|numerous|countless|several|many|multiple|dozens|hundreds)\s+(killed|dead|fatalities|casualties|believed dead|feared dead|reported dead)\b/i,

    /\b(there\s+(were|are|have been)?)\s*(\d+|several|many|multiple|dozens|hundreds)\s+(casualties|fatalities|dead|killed)\b/i,

    /\b(authorities|officials|reports?|sources|investigators?)\s+(confirm|report|announce|record|list|declare)\s+(\d+|several|many|multiple|dozens|hundreds)\s+(casualties|fatalities|dead|killed)\b/i
  ];

  for (const pattern of deathPatterns) {

    const match = text.match(pattern);

    if (match) {
      return match[0];
    }
  }

  return "Unknown";
}

/**
 * Extract response action information.
 *
 * @param {string} text
 * @returns {string}
 */
function extractResponseAction(text) {

  const responsePatterns = [

    /(Police|Security|Authorities)\s+(responded|intervened|took action)/i,

    /(Military|Army|Navy|Air Force)\s+(deployed|responded|intervened)/i,

    /(Rescue Team|Emergency Services|Firefighters)\s+(arrived|responded|deployed)/i,

    /(Authorities)\s+(launched an investigation|opened an investigation)/i
  ];

  for (const pattern of responsePatterns) {

    const match = text.match(pattern);

    if (match) {
      return match[0];
    }
  }

  return "Unknown";
}

/**
 * Extract agencies and authorities involved.
 *
 * @param {string} text
 * @returns {string}
 */
function extractAuthorities(text) {

  const authorityPatterns = [

    /\bPolice\b/i,
    /\bMilitary\b/i,
    /\bArmy\b/i,
    /\bNavy\b/i,
    /\bAir Force\b/i,
    /\bDSS\b/i,
    /\bNSCDC\b/i,
    /\bCivil Defence\b/i,
    /\bFirefighters\b/i,
    /\bRescue Team\b/i,
    /\bGovernment Officials\b/i,
    /\bAuthorities\b/i
  ];

  const matches = [];

  authorityPatterns.forEach(pattern => {

    const match = text.match(pattern);

    if (match) {
      matches.push(match[0]);
    }
  });

  if (matches.length === 0) {
    return "Unknown";
  }

  return [...new Set(matches)].join(", ");
}
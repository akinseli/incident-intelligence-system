/**
 * Incident Topics Configuration
 * 
 * This file contains all monitored incident categories
 * used for filtering Google Alerts and classifying reports.
 */

const INCIDENT_TOPICS = [
  // Accidents & Disasters
  "Accident",
  "Airplane Crash",
  "Boat Capsize",
  "Bridge Collapse",
  "Building Collapse",
  "Explosion",
  "Fire Outbreak",
  "Flooding",
  "Gas Leak",
  "Industrial Accident",
  "Landslide",
  "Pipeline Explosion",
  "Road Crash",
  "Train Accident",

  // Security Incidents
  "Armed Attack",
  "Armed Robbery",
  "Assassination",
  "Bandits",
  "Communal Clash",
  "Cult Clash",
  "Ethnic Clash",
  "Gunmen Attack",
  "Homicide",
  "Jungle Justice",
  "Kidnap",
  "Killing",
  "Lynching",
  "Mob Attack",
  "Murder",
  "Ritual Killing",
  "Terrorism",
  "Vigilante Attack",

  // Abduction & Human Trafficking
  "Abduction",
  "Child Abduction",
  "Hostage Situation",
  "Human Trafficking",

  // Terrorism & Insurgency
  "Boko Haram Attack",
  "IED",
  "Insurgency",
  "Suicide Bombing",
  "Terrorist Attack",

  // Property Crimes
  "Arson",
  "Burglary",
  "Car Theft",
  "House Break-in",
  "Looting",
  "Theft",
  "Vandalism",

  // Civil Disturbances
  "Civil Unrest",
  "Demonstration",
  "Labor Strike",
  "Political Protest",
  "Protest",
  "Riot",
  "Student Protest",
  "Unrest",

  // Gender-Based Violence
  "Child Molestation",
  "Domestic Violence",
  "Rape",
  "Sexual Assault",
  "Sexual Harassment",
  "Spousal Abuse",

  // Organized Crime
  "Arms Smuggling",
  "Drug Smuggling",
  "Illegal Mining",
  "Wildlife Poaching",

  // Security Operations
  "Arrest",
  "Extrajudicial Killing",
  "Military Operation",
  "Police Brutality",
  "Police Shooting",
  "Security Raid"
];

/**
 * Finds the first matching incident topic
 * from a text string.
 *
 * @param {string} text
 * @returns {string}
 */
function detectIncidentTopic(text) {
  if (!text) return "Unknown";

  const normalizedText = text.toLowerCase();

  const matchedTopic = INCIDENT_TOPICS.find(topic =>
    normalizedText.includes(topic.toLowerCase())
  );

  return matchedTopic || "Unknown";
}
# Incident Intelligence System

An automated Open Source Intelligence (OSINT) incident collection platform built with Google Apps Script.

The system ingests Google Alerts, extracts incident information from news articles, enriches the data with geographic intelligence, and stores structured records in Google Sheets for analysis and reporting.

---

## Features

- Automated Google Alert ingestion
- News article URL extraction
- Article content scraping
- Incident classification
- State, LGA, town and community detection
- Casualty extraction
- Death count extraction
- Authority identification
- Incident timeline extraction
- Automated Google Sheets storage
- Monthly worksheet generation

---

## Project Structure

```text
incident-intelligence-system/
│
├── appsscript.json
├── README.md
├── .gitignore
│
├── src/
│
├── main.gs
│
├── config/
│   └── topics.gs
│
├── gmail/
│   └── gmailFetcher.gs
│
├── scraping/
│   ├── urlExtractor.gs
│   └── articleScraper.gs
│
├── processing/
│   ├── summaryExtractor.gs
│   └── incidentExtractor.gs
│
├── data/
│   └── nigeriaLocations.gs
│
└── sheets/
    └── sheetWriter.gs
```

---

## Data Pipeline

```text
Google Alerts
      ↓
 Gmail Inbox
      ↓
 URL Extraction
      ↓
 Article Scraping
      ↓
 Summary Generation
      ↓
 Incident Extraction
      ↓
 Location Intelligence
      ↓
 Google Sheets
```

---

## Requirements

- Google Account
- Google Sheets
- Gmail
- Google Apps Script

Optional:

- Node.js
- CLASP

---

## Installation

Clone repository:

```bash
git clone https://github.com/yourusername/incident-intelligence-system.git
```

Open the project:

```bash
cd incident-intelligence-system
```

Deploy using CLASP:

```bash
clasp push
```

---

## Scheduling

Create a time-driven Apps Script trigger:

```javascript
fetchIncidentReports()
```

Recommended frequency:

- Every 15 minutes
- Every hour
- Daily

Depending on operational requirements.

---

## Security Notes

Do not commit:

- API keys
- Personal email addresses
- Spreadsheet IDs
- CLASP credentials

Store secrets securely.

---

## Future Enhancements

- AI-powered summarization
- NLP entity extraction
- Sentiment analysis
- Interactive dashboard
- Geospatial visualization
- Threat scoring
- Incident heatmaps
- Database integration
- API endpoints

---

## License

MIT License
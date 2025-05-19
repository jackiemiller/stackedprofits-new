# Lead Submissions Storage

This directory stores lead form submissions as JSON files when users complete the lead capture form on the website.

## Format

Each submission is saved as a separate JSON file with the following naming convention:
`TIMESTAMP_EMAIL.json`

For example: `2025-05-19T16-33-45-123Z_user_example_com.json`

## Data Structure

Each file contains the lead submission data in JSON format:

```json
{
  "fullName": "User's Full Name",
  "email": "user@example.com",
  "phone": "1234567890",
  "websiteType": "business",
  "submittedAt": "2025-05-19T16:33:45.123Z"
}
```

## Purpose

This storage method ensures that all lead submissions are captured even when database connections might have issues. It provides a reliable backup system for your lead data.

## Accessing Lead Data

You can access these lead submissions by:
1. Downloading the files directly from the server
2. Importing the files into a spreadsheet or CRM system

## Privacy Note

These files contain personal information. Remember to follow privacy regulations when handling this data.
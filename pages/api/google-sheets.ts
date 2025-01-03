import { google, sheets_v4 } from "googleapis";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, number, location } = req.body;

  console.log("data : ", name, number, location);

  if (!name || !number || !location) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || ""),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets: sheets_v4.Sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!spreadsheetId) {
      throw new Error("Spreadsheet ID is missing in environment variables");
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A1:C1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, number, location]],
      },
    });

    res.status(200).json({ message: "Data saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save data" });
  }
}

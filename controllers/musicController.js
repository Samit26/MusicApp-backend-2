import { google } from "googleapis";
import { googleConfig } from "../config/config.js";
import path from "path";

// Configure Google Drive API
const SCOPES = ["https://www.googleapis.com/auth/drive.readonly"];
const auth = new google.auth.GoogleAuth({
  credentials: googleConfig, // Path to your credentials.json file
  scopes: SCOPES,
});

const drive = google.drive({ version: "v3", auth });

// Fetch all music files from Google Drive
export const getAllMusic = async (req, res) => {
  try {
    const folderId = "1asx5vzcR_HYQklRCTk3Mvc7smbYEza1f"; // Replace with your folder ID

    // Get files from the specified folder
    const response = await drive.files.list({
      q: `'${folderId}' in parents`,
      fields: "files(id, name, webContentLink)",
    });

    const musicFiles = response.data.files.map((file) => ({
      id: file.id,
      name: file.name,
      url: file.webContentLink, // URL to download/stream the file
    }));

    // console.log("Folder ID:", folderId);
    // console.log("Drive API response:", response);

    res.status(200).json(musicFiles);
  } catch (error) {
    console.error("Error fetching music files:", error);
    res.status(500).json({ message: "Error fetching music files", error });
  }
};

// routes/teams.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get("/", async (req, res) => {
  const {
    site_type, // Optional (e.g., club, CCB)
    from_entry_date,
    end_entry_date,
  } = req.query;

  const apiToken = process.env.API_TOKEN;
  const site_id = process.env.SITE_ID;

  if (!apiToken) {
    return res.status(500).json({ error: "API token is missing." });
  }

  // Base URL for all teams or site-specific teams
  const apiUrl = site_id
    ? `https://www.play-cricket.com/api/v2/sites/${site_id}/teams.json`
    : `https://www.play-cricket.com/api/v2/teams.json`;

  const params = {
    api_token: apiToken,
    site_type,
    from_entry_date,
    end_entry_date,
  };

  try {
    const response = await axios.get(apiUrl, { params });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching teams:", error);
    res
      .status(500)
      .json({ error: "Error fetching teams from Play Cricket API." });
  }
});

export default router;

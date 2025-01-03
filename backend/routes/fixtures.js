// routes/fixtures.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get("/", async (req, res) => {
  const {
    season = "2024", // Default season to 2024 if not provided
    division_id,
    cup_id,
    team_id,
    competition_type,
    from_entry_date,
    end_entry_date,
    include_unpublished = "no", // Default to not include unpublished matches
  } = req.query;

  const siteId = process.env.SITE_ID;
  const apiToken = process.env.API_TOKEN;

  if (!siteId || !apiToken) {
    return res.status(500).json({ error: "Site ID or API token is missing." });
  }

  const apiUrl = `http://play-cricket.com/api/v2/matches.json`;

  const params = {
    api_token: apiToken,
    site_id: siteId,
    season, // Defaulted to "2024" if not provided
    division_id,
    cup_id,
    team_id,
    competition_type,
    from_entry_date,
    end_entry_date,
    include_unpublished: include_unpublished === "yes" ? "yes" : "no",
  };

  try {
    const response = await axios.get(apiUrl, { params });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching fixtures:", error);
    res
      .status(500)
      .json({ error: "Error fetching fixtures from Play Cricket API." });
  }
});

export default router;

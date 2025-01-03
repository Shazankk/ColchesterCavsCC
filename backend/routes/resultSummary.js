// routes/resultSummary.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get("/", async (req, res) => {
  const {
    season = "2024",
    division_id,
    cup_id,
    team_id,
    competition_type = "League",
    from_match_date,
    end_match_date,
    from_entry_date,
    end_entry_date,
  } = req.query;

  const siteId = process.env.SITE_ID;
  const apiToken = process.env.API_TOKEN;

  if (!siteId || !apiToken) {
    return res.status(500).json({ error: "Site ID or API token is missing." });
  }

  const apiUrl = `http://play-cricket.com/api/v2/result_summary.json`;

  const params = {
    api_token: apiToken,
    site_id: siteId,
    season,
    division_id,
    cup_id,
    team_id,
    competition_type,
    from_match_date,
    end_match_date,
    from_entry_date,
    end_entry_date,
  };

  try {
    const response = await axios.get(apiUrl, { params });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching result summary:", error);
    res
      .status(500)
      .json({ error: "Error fetching result summary from Play Cricket API." });
  }
});

export default router;

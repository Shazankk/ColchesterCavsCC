// routes/competitions.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get("/", async (req, res) => {
  const { season = "2024" } = req.query; // Default season to 2024 and competition_type to "divisions"

  const leagueId = process.env.LEAGUE_ID;
  const apiToken = process.env.API_TOKEN;
  const competition_type = process.env.competition_type;

  if (!leagueId || !apiToken || !season || !competition_type) {
    return res.status(400).json({
      error:
        "Missing required parameters (league_id, api_token, season, or competition_type).",
    });
  }

  const apiUrl = `http://play-cricket.com/api/v2/competitions.json`;

  const params = {
    api_token: apiToken,
    league_id: leagueId,
    season,
    competition_type: competition_type,
  };

  try {
    const response = await axios.get(apiUrl, { params });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching competitions:", error);
    res
      .status(500)
      .json({ error: "Error fetching competitions from Play Cricket API." });
  }
});

export default router;

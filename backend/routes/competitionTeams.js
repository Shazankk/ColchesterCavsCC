// routes/competitionTeams.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get("/", async (req, res) => {
  const leagueId = process.env.LEAGUE_ID;
  const apiToken = process.env.API_TOKEN;

  if (!leagueId || !apiToken) {
    return res
      .status(500)
      .json({ error: "League ID or API token is missing." });
  }

  const apiUrl = `http://play-cricket.com/api/v2/competition_teams.json`;

  const params = {
    api_token: apiToken,
    id: leagueId,
  };

  try {
    const response = await axios.get(apiUrl, { params });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching competition teams:", error);
    res
      .status(500)
      .json({
        error: "Error fetching competition teams from Play Cricket API.",
      });
  }
});

export default router;

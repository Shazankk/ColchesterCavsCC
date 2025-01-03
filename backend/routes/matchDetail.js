// routes/matchDetail.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get("/", async (req, res) => {
  const {
    match_id = "6126482", //By Default. Can be something else
  } = req.query;

  const apiToken = process.env.API_TOKEN;

  if (!match_id || !apiToken) {
    return res.status(400).json({ error: "Match ID or API token is missing." });
  }

  const apiUrl = `http://play-cricket.com/api/v2/match_detail.json`;

  const params = {
    api_token: apiToken,
    match_id,
  };

  try {
    const response = await axios.get(apiUrl, { params });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching match details:", error);
    res
      .status(500)
      .json({ error: "Error fetching match details from Play Cricket API." });
  }
});

export default router;

// routes/player.js
import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.get("/", async (req, res) => {
  const { include_everyone = "no", include_historic = "no" } = req.query;

  const siteId = process.env.SITE_ID;
  const apiToken = process.env.API_TOKEN;

  if (!siteId || !apiToken) {
    return res.status(500).json({ error: "Site ID or API token is missing." });
  }

  const apiUrl = `http://play-cricket.com/api/v2/sites/${siteId}/players`;
  const params = {
    api_token: apiToken,
    include_everyone: include_everyone === "yes" ? "yes" : "no",
    include_historic: include_historic === "yes" ? "yes" : "no",
  };

  try {
    const response = await axios.get(apiUrl, { params });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching players:", error);
    res
      .status(500)
      .json({ error: "Error fetching players from Play Cricket API." });
  }
});

export default router;

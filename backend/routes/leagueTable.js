/* eslint-disable no-undef */
import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import NodeCache from "node-cache";

dotenv.config();

const router = express.Router();
const cache = new NodeCache({ stdTTL: 600 });

router.get("/", async (req, res) => {
  const { competition_id = 116512 } = req.query;

  const cacheKey = `leagueTable_${competition_id}`;

  if (cache.has(cacheKey)) {
    return res.json(cache.get(cacheKey));
  }

  try {
    const response = await axios.get(
      `http://play-cricket.com/api/v2/league_table.json?division_id=${competition_id}&api_token=${process.env.PLAY_CRICKET_API}`
    );

    // Cache the API response
    cache.set(cacheKey, response.data);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error fetching data from the Play-Cricket API" });
  }
});

export default router;

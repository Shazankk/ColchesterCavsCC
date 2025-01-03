// backend/index.js
import express from "express";
import cors from "cors";
import playerRouter from "./routes/player.js";
import rSummaryRouter from "./routes/resultSummary.js";
import matchDetailRouter from "./routes/matchDetail.js";
import fixturesRouter from "./routes/fixtures.js";
import compTeamsRouter from "./routes/competitionTeams.js";
import competitionRouter from "./routes/competitions.js";
import teamsRouter from "./routes/teams.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use("/players", playerRouter);
app.use("/resultSummary", rSummaryRouter);
app.use("/matchDetail", matchDetailRouter); //requires matchId
app.use("/fixtures", fixturesRouter);
app.use("/compTeams", compTeamsRouter);
app.use("/competitions", competitionRouter);
app.use("/teams", teamsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

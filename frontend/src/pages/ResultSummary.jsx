import { useState } from "react";
import { Card, TextInput, Select, Button } from "flowbite-react";
import useFetch from "react-fetch-hook";

const ResultSummary = () => {
  const [season, setSeason] = useState("2024");
  const [competitionType, setCompetitionType] = useState("");
  const [fromMatchDate, setFromMatchDate] = useState("");
  const [endMatchDate, setEndMatchDate] = useState("");
  const [fromEntryDate, setFromEntryDate] = useState("");
  const [endEntryDate, setEndEntryDate] = useState("");

  const query = new URLSearchParams({
    season,
    competition_type: competitionType,
    from_match_date: fromMatchDate,
    from_end_date: endMatchDate,
    from_entry_date: fromEntryDate,
    end_entry_date: endEntryDate,
  }).toString();

  // Build the URL with filters
  const url = `http://localhost:5000/resultSummary?${query}`;

  // Fetch data using useFetch
  const { isLoading, data, error } = useFetch(url);

  const handleSearch = (e) => {
    e.preventDefault();
    // Fetch results based on the selected filters
  };

  // Extract important data from resultSummary
  const importantResults = data
    ? data.result_summary.map((match) => ({
        id: match.id,
        matchDate: match.match_date,
        matchTime: match.match_time,
        homeTeam: match.home_team_name,
        awayTeam: match.away_team_name,
        groundName: match.ground_name,
        groundLatitude: match.ground_latitude,
        groundLongitude: match.ground_longitude,
        resultDescription: match.result_description,
      }))
    : [];

  return (
    <div id="result-summary" className="p-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Match Results Summary
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
          Filter and view match results.
        </p>
      </div>

      {/* Filter Form */}
      <form
        onSubmit={handleSearch}
        className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <TextInput
          id="season"
          type="text"
          placeholder="Enter Season"
          value={season}
          onChange={(e) => setSeason(e.target.value)}
          required
        />
        <Select
          id="competitionType"
          value={competitionType}
          onChange={(e) => setCompetitionType(e.target.value)}
        >
          <option value="">Select Competition Type</option>
          <option value="League">League</option>
          <option value="Cup">Cup</option>
          <option value="Friendly">Friendly</option>
        </Select>
        <TextInput
          id="fromMatchDate"
          type="date"
          placeholder="From Match Date"
          value={fromMatchDate}
          onChange={(e) => setFromMatchDate(e.target.value)}
        />
        <TextInput
          id="endMatchDate"
          type="date"
          placeholder="To Match Date"
          value={endMatchDate}
          onChange={(e) => setEndMatchDate(e.target.value)}
        />
        <TextInput
          id="fromEntryDate"
          type="date"
          placeholder="From Entry Date"
          value={fromEntryDate}
          onChange={(e) => setFromEntryDate(e.target.value)}
        />
        <TextInput
          id="endEntryDate"
          type="date"
          placeholder="To Entry Date"
          value={endEntryDate}
          onChange={(e) => setEndEntryDate(e.target.value)}
        />
        <Button type="submit" className="w-full md:w-auto mt-4 md:mt-0">
          Search
        </Button>
      </form>

      {/* Display loading, error, or the list of results */}
      {isLoading ? (
        <p>Loading match results...</p>
      ) : error ? (
        <p>Error fetching match results: {error.message}</p>
      ) : (
        <div className="overflow-y-auto max-h-[600px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {importantResults.map((match) => (
              <Card
                key={match.id}
                className="w-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* Match Date and Time */}
                <h5 className="text-lg font-semibold text-center text-gray-900 dark:text-white">
                  {match.matchDate} - {match.matchTime}
                </h5>

                {/* Teams */}
                <p className="text-center text-gray-700 dark:text-gray-300">
                  {match.homeTeam} vs {match.awayTeam}
                </p>

                {/* Ground with clickable link */}
                <p className="text-center text-gray-700 dark:text-gray-300">
                  {match.groundName}
                </p>

                {/* Result */}
                <p className="text-center strong font-bold text-gray-700 dark:text-gray-300">
                  {match.resultDescription}
                </p>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultSummary;

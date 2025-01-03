import { useState } from "react";
import { Card, Label, TextInput, Button, Select } from "flowbite-react";
import useFetch from "react-fetch-hook";

const Fixtures = () => {
  const [season, setSeason] = useState("2024"); // Default season
  const [competitionType, setCompetitionType] = useState("League");
  const [fromEntryDate, setFromEntryDate] = useState("");
  const [endEntryDate, setEndEntryDate] = useState("");

  // Create the API query string
  const query = new URLSearchParams({
    season,
    competition_type: competitionType,
    from_entry_date: fromEntryDate,
    end_entry_date: endEntryDate,
  }).toString();

  // Fetch fixtures using useFetch hook
  const { isLoading, data } = useFetch(
    `http://localhost:5000/fixtures?${query}`
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="fixtures" className="p-6 rounded-lg">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Fixtures
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
          Explore upcoming matches and updates.
        </p>
      </div>

      {/* Filters Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8"
      >
        {/* Season */}
        <div>
          <Label htmlFor="season">Season</Label>
          <TextInput
            id="season"
            type="text"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            placeholder="Enter season (e.g., 2024)"
          />
        </div>

        {/* Competition Type */}
        <div>
          <Label htmlFor="competitionType">Competition Type</Label>
          <Select
            id="competitionType"
            value={competitionType}
            onChange={(e) => setCompetitionType(e.target.value)}
          >
            <option value="League">League</option>
            <option value="Cup">Cup</option>
            <option value="Friendly">Friendly</option>
          </Select>
        </div>

        {/* From Entry Date */}
        <div>
          <Label htmlFor="fromEntryDate">From Entry Date</Label>
          <TextInput
            id="fromEntryDate"
            type="date"
            value={fromEntryDate}
            onChange={(e) => setFromEntryDate(e.target.value)}
          />
        </div>

        {/* End Entry Date */}
        <div>
          <Label htmlFor="endEntryDate">End Entry Date</Label>
          <TextInput
            id="endEntryDate"
            type="date"
            value={endEntryDate}
            onChange={(e) => setEndEntryDate(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-end">
          <Button type="submit">Filter Fixtures</Button>
        </div>
      </form>

      {/* Display Fixtures */}
      <div className="overflow-y-auto max-h-[50vh]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {isLoading ? (
            <p>Loading fixtures...</p>
          ) : (
            data &&
            data.matches
              .filter(
                (match) =>
                  match.ground_name &&
                  match.home_team_name &&
                  match.away_team_name
              )
              .slice(0, 12)
              .map((match) => (
                <Card key={match.id} className="shadow-lg">
                  <h3 className="text-2xl font-bold mb-2">
                    {match.home_team_name} vs {match.away_team_name}
                  </h3>
                  <p className="text-gray-600">
                    <strong>Date:</strong> {match.match_date} at{" "}
                    {match.match_time}
                  </p>
                  <p className="text-gray-600">
                    <strong>Ground:</strong>{" "}
                    {match.ground_latitude && match.ground_longitude ? (
                      <a
                        href={`https://www.google.com/maps?q=${match.ground_latitude},${match.ground_longitude}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        {match.ground_name}
                      </a>
                    ) : (
                      match.ground_name
                    )}
                  </p>
                  <p className="text-gray-600">
                    <strong>Competition:</strong> {match.competition_name}
                  </p>
                  <p className="text-gray-600">
                    <strong>Status:</strong> {match.status}
                  </p>
                  <p className="text-gray-600">
                    <strong>Last Updated:</strong> {match.last_updated}
                  </p>
                </Card>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Fixtures;

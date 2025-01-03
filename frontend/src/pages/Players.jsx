import { useState } from "react";
import { Card, TextInput } from "flowbite-react";
import useFetch from "react-fetch-hook";

const Players = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { isLoading, data, error } = useFetch("http://localhost:5000/players");

  // Filter players based on search input
  const filteredPlayers = data
    ? data.players.filter((player) =>
        player.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div id="players" className="p-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Meet Our Players
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
          Discover the talented members of our team.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <TextInput
          id="search"
          type="text"
          placeholder="Search players by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 mx-auto"
        />
      </div>

      {/* Display loading, error, or the list of players */}
      {isLoading ? (
        <p>Loading players...</p>
      ) : error ? (
        <p>Error fetching players: {error.message}</p>
      ) : (
        <div className="overflow-y-auto max-h-96">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredPlayers.slice(0, 10).map((player) => (
              <Card
                key={player.member_id}
                className="w-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                imgSrc="https://via.placeholder.com/150"
                imgAlt={player.name}
              >
                <h5 className="text-xl font-bold text-center text-gray-900 dark:text-white">
                  {player.name}
                </h5>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Players;

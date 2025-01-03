import useFetch from "react-fetch-hook"; // Import the react-fetch-hook
import { Card } from "flowbite-react";

const Teams = () => {
  const { isLoading, data, error } = useFetch("http://localhost:5000/teams"); // Use correct API URL

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading teams: {error.message}</div>;

  return (
    <div id="#teams" className="p-6">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Meet Our Team
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mt-2">
          Dedicated teams from our Cavaliers squad.
        </p>
      </div>
      <div className="flex flex-wrap justify-between gap-6 p-6">
        {data?.teams?.map((team) => (
          <Card
            key={team.id}
            className="w-80 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            imgSrc="https://via.placeholder.com/150"
            imgAlt={team.other_team_name}
          >
            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              {team.other_team_name}
            </h5>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Teams;

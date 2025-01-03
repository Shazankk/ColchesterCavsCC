// src/pages/Sponsors.jsx
import { Carousel } from "flowbite-react";
import { brands } from "../constants";

function Sponsors() {
  return (
    <div className="container mx-auto px-4 py-2" id="sponsors">
      {/* Header */}
      <div className="text-center mb-4">
        {" "}
        {/* Reduced margin-bottom */}
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Our Sponsors
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
          We are grateful for the support of our sponsors.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96 mb-2">
        {" "}
        {/* Reduced margin-bottom */}
        <Carousel
          slideInterval={5000}
          pauseOnHover={true}
          indicators={true} // Enable indicators
          className="rounded-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105"
        >
          {brands.map((sponsor, index) => (
            <div
              key={index}
              className="flex shadow-lg items-center justify-center h-full bg-gradient-to-tr from-blue-300 via-indigo-450 to-purple-600"
            >
              <a
                href={sponsor.web}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-full w-full p-4 transition-transform duration-500 ease-in-out hover:scale-110"
              >
                <img
                  src={sponsor.img}
                  alt={`${sponsor.brand} Logo`}
                  className="object-contain h-48 w-auto transition-opacity duration-300 ease-in-out hover:opacity-90 rounded-lg shadow-xl lg:basis-1/3 md:basis-1/2"
                />
              </a>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Sponsors;

import React, { useEffect, useState } from "react";
import WeatherDisplay from "./weatherDisplay";

const API_KEY = import.meta.env.VITE_API_KEY;

function Search() {
  const [weather, setWeather] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const city = event.target.city.value;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Weather data could not be fetched.");
      }
      const data = await response.json();
      setWeather(data);
      console.log("Weather data: ", data);
    } catch (error) {
      console.error("Error fetching the weather data:", error);
    }
  };

  return (
    <div className="flex justify-center form-control   space-x-2  p-4  bg-caribbean text-black">
      <form
        id="search"
        onSubmit={handleSubmit}
        className="py-0 bg-caribbean px-1 rounded-md "
      >
        <div className="flex items-center input input-bordered  bg-white rounded-full shadow-md content-center  gap-4">
          <input
            type="text"
            name="city"
            placeholder="Enter city name.."
            className="mt-0 bg-transparent  p-2  w-full"
          />

          <button
            type="submit"
            className="btn mt-0 px-4 py-2 text-white rounded-md hover:bg-blue-600"
          >
            Search
          </button>
        </div>
      </form>
      <WeatherDisplay weather={weather} />
    </div>
  );
}

export default Search;

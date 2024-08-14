import React, { useEffect, useState } from "react";
import WeatherDisplay from "./weatherDisplay";

function Search() {
  const [weather, setWeather] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const city = event.target.city.value;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ca83e9f1d7f479142e8f0f3e6bd8e16e`
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
    <>
      <form
        id="search"
        onSubmit={handleSubmit}
        className="flex flex-row items-center p-4 bg-gray-100 rounded-lg shadow-md space-y-4"
      >
        <label className="text-lg font-semibold">
          <input
            type="text"
            name="city"
            placeholder="Enter city name.."
            className="mt-4 p-2 border border-gray-300 rounded-md w-full"
          />
        </label>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <WeatherDisplay weather={weather} />
    </>
  );
}

export default Search;

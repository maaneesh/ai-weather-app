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
    <div className="form-control  space-x-2">
      <form
        id="search"
        onSubmit={handleSubmit}
        className="py-0 bg-orange-200 px-1 rounded-lg "
      >
        <div className="flex items-center content-center  bg-orange-200 gap-4">
          <input
            type="text"
            name="city"
            placeholder="Enter city name.."
            className="mt-0 p-2 border bg-sky-300 w-full"
          />

          <button
            type="submit"
            className="btn mt-0 px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-600"
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

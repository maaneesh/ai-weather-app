import React from "react";
import Search from "./search";

function WeatherDisplay({ weather }) {
  if (!weather) {
    return <p>No weather data available.</p>;
  }
  //convert temperature in Kelvin to Farenheit
  let tempFarenheit = Math.round(1.8 * (weather.main.temp - 273) + 32);
  let feelslike = Math.round(1.8 * (weather.main.feels_like - 273) + 32);
  let minTemp = Math.round(1.8 * (weather.main.temp_min - 273) + 32);
  let maxTemp = Math.round(1.8 * (weather.main.temp_max - 273) + 32);
  let humidity = weather.main.humidity;

  return (
    <div className="mt-4 text-xl font-semibold">
      <div className="flex justify-center gap-2 ">
        <h2>Currently in </h2>

        <p>{weather.name}</p>
      </div>

      <div>
        <p>Temperature is {tempFarenheit}F</p>
      </div>
      <div>
        <p>Humidity: {humidity}%</p>
      </div>
      <div>
        <p>Feels Like: {feelslike}F</p>
      </div>

      <div className="flex gap-2 justify-center">
        <p>Min:{minTemp} F</p>
        <p>Max:{maxTemp}F</p>
      </div>
      <div>
        <p>Condition: {weather.weather[0].description}</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;

import React from "react";

function WeatherDisplay({ weather }) {
  if (!weather) {
    return <p>No weather data available.</p>;
  }
  //convert temperature in Kelvin to Farenheit
  let tempFarenheit = Math.round(1.8 * (weather.main.temp - 273) + 32);
  let feelslike = Math.round(1.8 * (weather.main.feels_like - 273) + 32);

  return (
    <div className="mt-4">
      <h2>Weather Information:</h2>
      <p>Currently in: {weather.name}</p>
      <p>Temperature: {tempFarenheit}F</p>
      <p>Feels Like: {feelslike}F</p>
      <p>Condition: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherDisplay;

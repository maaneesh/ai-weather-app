import React from "react";

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
    <div className="mt-4">
      <h2>Weather Information:</h2>
      <p>Currently in: {weather.name}</p>
      <p>Temperature: {tempFarenheit}F</p>
      <p>Humidity: {humidity}%</p>
      <p>Feels Like: {feelslike}F</p>
      <p>Min:{minTemp} F</p>
      <p>Max:{maxTemp}F</p>
      <p>Condition: {weather.weather[0].description}</p>
      <p>{}</p>
    </div>
  );
}

export default WeatherDisplay;

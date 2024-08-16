import React from "react";
import Search from "./search";
import Card from "./card";

function WeatherDisplay({ weather }) {
  if (!weather) {
    return <p>No weather data available.</p>;
  }
  //convert temperature in Kelvin to Farenheit
  let city = weather.name;
  let tempFarenheit = Math.round(1.8 * (weather.main.temp - 273) + 32);
  let feelslike = Math.round(1.8 * (weather.main.feels_like - 273) + 32);
  let minTemp = Math.round(1.8 * (weather.main.temp_min - 273) + 32);
  let maxTemp = Math.round(1.8 * (weather.main.temp_max - 273) + 32);
  let humidity = weather.main.humidity;
  let description = weather.weather[0].description;
  let icon = weather.weather[0].icon;

  return (
    <div className="mt-4 text-xl pl-0 py-4 text-isabelline bg-caribbean font-semibold flex flex-col items-center">
      <div className="flex items-center text-center  space-x-0 justify-center">
        <h2 className="m-0 p-0">Currently in</h2>
        <Card prop={city} />
      </div>
      <div className="flex items-center space-x-0 text-center">
        <h2>expect</h2>
        <Card prop={description} />
      </div>

      <img
        className="mx-auto w-20 mt-2 box-border bg-caribbean bg-opacity-0"
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt="weather icon"
      />
      <div className=" flex py-2 items-center justify-center text-center">
        <h2>
          Temperature is <Card prop={tempFarenheit} />
        </h2>
      </div>
      <div className="text-center">
        <h2>Humidity:</h2>
        <Card prop={humidity} />
      </div>
      <div className="text-center">
        <h2>Feels Like</h2>
        <Card prop={feelslike} />
      </div>
      <div className="flex flex-col gap-2 text-center items-center">
        <h2>Min Temp</h2>
        <Card prop={minTemp} />
      </div>
      <div className="flex flex-col  text-center gap-2 items-center">
        <h2>Max Temp</h2>
        <Card prop={maxTemp} />
      </div>
    </div>
  );
}

export default WeatherDisplay;

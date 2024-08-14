import { useState } from "react";
import Search from "./components/search";
import WeatherDisplay from "./components/weatherDisplay";
function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="text-center">
        <h1>Weather</h1>
        <Search />
      </div>
    </div>
  );
}

export default App;

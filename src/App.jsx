import { useContext, useState } from "react";
import Search from "./components/search";
import WeatherDisplay from "./components/weatherDisplay";

function App() {
  return (
    <div className="h-screen w-screen  flex justify-center items-center">
      <div className="artboard phone-5 text-xl font-semibold text-center">
        <div className="py-4">
          <h1>Weather</h1>
        </div>
        <Search />
      </div>
    </div>
  );
}

export default App;

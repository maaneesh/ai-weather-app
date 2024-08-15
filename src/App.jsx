import { useContext, useState } from "react";
import Search from "./components/search";
import WeatherDisplay from "./components/weatherDisplay";

function App() {
  return (
    <div className="h-screen w-screen  flex justify-center items-center">
      <div className="min-w-90 bg-orange-200">
        <div className="py-3.5 font-semibold text-center">
          <div>
            <h1 className="text-xl  text-stone-950 ">Current Weather</h1>
          </div>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;

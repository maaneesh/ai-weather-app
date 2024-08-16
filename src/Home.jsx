import { useContext, useState } from "react";
import Search from "./components/search";
import WeatherDisplay from "./components/weatherDisplay";
import Header from "./components/header";
function Home() {
  return (
    <div className="h-screen w-screen mx-auto bg-caribbean flex flex-col items-center  justify-start max-w-[60%] bg-sky-400 ">
      <Header />
      <Search />
    </div>
  );
}

export default Home;

import React from "react";
import "./App.css";
import Header from "./Header";
import DayInfo from "./DayInfo";
import CurrentWeather from "./CurrentWeather";

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <DayInfo />
        <CurrentWeather />
      </div>
      <footer>
        Open source code by
        <a
          href="https://github.com/Ana-Rita95/weather-react-app"
          target="_blank"
        >
          {" "}
          Ana Rita Silva
        </a>
      </footer>
    </div>
  );
}

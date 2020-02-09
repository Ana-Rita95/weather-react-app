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
    </div>
  );
}

import React, { useState } from "react";
import "./CurrentWeather.css";
import WeatherDetail from "./WeatherDetail";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
  const [unit, setUnit] = useState("celsius");
  function showFar(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.info.temperature * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="currentWeather">
        <div className="row">
          <div className="col-2">
            <WeatherIcon code={props.info.icon} />
          </div>
          <div className="col-1 currentTemperature float-left">
            {Math.round(props.info.temperature)}
          </div>
          <div className="col-3 temperatureUnit float-left">
            <span className="temperatureUnit">
              {" "}
              ºC |
              <a href="/" onClick={showFar}>
                ºF
              </a>
            </span>
          </div>
          <WeatherDetail detail={props.info.weatherStatus} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="currentWeather">
        <div className="row">
          <div className="col-2">
            <WeatherIcon code={props.info.icon} />
          </div>
          <div className="col-1 currentTemperature float-left">
            {Math.round(fahrenheit())}
          </div>
          <div className="col-3 temperatureUnit float-left">
            <span className="temperatureUnit">
              <a href="/" onClick={showCelsius}>
                ºC
              </a>{" "}
              | ºF
            </span>
          </div>
          <WeatherDetail detail={props.info.weatherStatus} />
        </div>
      </div>
    );
  }
}

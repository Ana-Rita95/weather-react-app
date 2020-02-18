import React from "react";
import "./CurrentWeather.css";
import WeatherDetail from "./WeatherDetail";

export default function CurrentWeather(props) {
  return (
    <div className="currentWeather">
      <div className="row">
        <div className="col-2">
          <i className="fas fa-wind" />
        </div>
        <div className="col-1 currentTemperature float-left">
          {Math.round(props.info.temperature)}
        </div>
        <div className="col-3 temperatureUnit float-left">
          <span className="temperatureUnit">
            <a href="/" className="active">
              {" "}
              ºC
            </a>
            |<a href="/">ºF</a>
          </span>
        </div>
        <WeatherDetail detail={props.info.weatherStatus} />
      </div>
    </div>
  );
}

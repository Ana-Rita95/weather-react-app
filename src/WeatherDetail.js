import React from "react";
import "./WeatherDetail.css";

export default function WeatherDetail() {
  return (
    <div className="col-6 float-left">
      <h6 className="pressure">
        Pressure: <span /> 1044 mb
      </h6>
      <h6 className="humidity">
        Humidity: <span />
        90%
      </h6>
      <h6 className="wind">
        Wind: <span /> 40 km/h
      </h6>
    </div>
  );
}

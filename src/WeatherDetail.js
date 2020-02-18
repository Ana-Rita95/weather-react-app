import React from "react";
import "./WeatherDetail.css";

export default function WeatherDetail(props) {
  return (
    <div className="col-6 float-left">
      <h6 className="pressure">Pressure: {props.detail.pressure} mb</h6>
      <h6 className="humidity">Humidity: {props.detail.humidity}%</h6>
      <h6 className="wind">Wind: {props.detail.wind}km/h</h6>
    </div>
  );
}

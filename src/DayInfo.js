import React from "react";
import "./DayInfo.css";
import Greeting from "./Greeting.js";
export default function DayInfo(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[props.data.date.getDay()];
  let hours = props.data.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.data.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div className="dayInfo">
      <h4>
        <span className="greeting">
          <Greeting time={hours} />
        </span>
        <span className="city"> {props.data.city}</span>
      </h4>
      <h6 className="timeDate">
        Last updated at: {day} {hours}:{minutes}
      </h6>
      <h6 className="weatherStatus text-capitalize">
        {props.data.description}
      </h6>
    </div>
  );
}

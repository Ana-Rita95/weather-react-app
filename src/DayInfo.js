import React from "react";
import "./DayInfo.css";
export default function DayInfo() {
  return (
    <div className="dayInfo">
      <h4>
        <span className="greeting">Good Afternoon,</span>
        <span className="city"> Lisbon.</span>
      </h4>
      <h6 className="timeDate">Last updated at: sunday, 19:00</h6>
      <h6 className="weatherStatus">Windy</h6>
    </div>
  );
}

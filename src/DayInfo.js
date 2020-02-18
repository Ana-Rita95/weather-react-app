import React from "react";
import "./DayInfo.css";
export default function DayInfo(props) {
  return (
    //Não esquecer que falta alterar o greeting e as horas. criar um novo componente.
    <div className="dayInfo">
      <h4>
        <span className="greeting">Good Afternoon,</span>
        <span className="city"> {props.data.city}</span>
      </h4>
      <h6 className="timeDate">Last updated at: sunday, 19:00</h6>
      <h6 className="weatherStatus">{props.data.description}</h6>
    </div>
  );
}

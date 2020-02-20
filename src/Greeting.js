import React from "react";

export default function Greeting(props) {
  if (props.time <= 12) {
    return "Good Morning";
  }

  if (props.time >= 18) {
    return "Good Night";
  } else {
    return "Good Afternoon";
  }
}

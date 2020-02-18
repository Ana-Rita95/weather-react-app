import React from "react";
import "./App.css";
import Header from "./Header";

export default function App() {
  return (
    <div className="App container">
      <div className="wrapper">
        <Header default="Lisbon" />
      </div>
      <footer>
        Open source code by
        <a
          href="https://github.com/Ana-Rita95/weather-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Ana Rita Silva
        </a>
      </footer>
    </div>
  );
}

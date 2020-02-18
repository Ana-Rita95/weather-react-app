import React, { useState } from "react";
import "./Header.css";
import DayInfo from "./DayInfo";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";

export default function Header(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.default);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      weatherStatus: {
        humidity: response.data.main.humidity,
        pressure: response.data.main.pressure,
        wind: response.data.wind.speed
      },
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "c36eed6fdb5a21af557e531f54eafda8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div>
        <header>
          <div className="search-engine">
            <form action="" onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter city here"
                  autoComplete="off"
                  onChange={handleCity}
                  autofocus="on"
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="submit">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </header>
        <DayInfo data={weatherData} />
        <CurrentWeather info={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}

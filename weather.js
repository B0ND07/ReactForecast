import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherDisplay from "./displayWeather";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");
  const [place, setPlace] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!place) {
      return;
    }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=ac3048e6f359f99002e5352ee2f611ae&units=metric`)
      .then((response) => {
        setWeather([response.data]);
        console.log(response)
        setError("");
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setWeather([]);
        setError('City not found. Please enter a valid city name.'); 
      });
  }, [place]);

  function getCity(e) {
    setCity(e.target.value);
  }

  function getPlace() {
    setPlace(city);
    setCity("")
  }

  return (
    <div className="weather-container">
      <h1 className="heading">ReactForecast</h1>
      <input className="input-field" value={city} onChange={getCity} type="text"></input>
      <button className="find-button" onClick={getPlace}>find</button>
      {error !== "" && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
      <WeatherDisplay weatherData={weather} />
    </div>
  );
}

export default Weather;

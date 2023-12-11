import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherDisplay from "./displayWeather";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState("");
  const [place, setPlace] = useState("");

  useEffect(() => {
    if (!place) {
      return;
    }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=ac3048e6f359f99002e5352ee2f611ae&units=metric`)
      .then((response) => {
        setWeather([response.data]);
      });
  }, [place]);

  function getCity(e) {
    setCity(e.target.value);
  }

  function getPlace() {
    setPlace(city);
  }

  return (
    <div>
      <input value={city} onChange={getCity} type="text"></input>
      <button onClick={getPlace}>find</button>
      <WeatherDisplay weatherData={weather} />
    </div>
  );
}

export default Weather;

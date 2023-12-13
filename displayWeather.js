import React from "react";
import {
  WiThermometer,
  WiSunrise,
  WiSunset,
  WiHumidity,
  WiBarometer,
} from "react-icons/wi";
import { FaCloud, FaCloudSun, FaCloudMoon, FaCloudShowersHeavy, FaSun, FaMoon, FaCloudRain, FaCloudSunRain, FaCloudMoonRain, FaBolt, FaSnowflake, FaSmog } from 'react-icons/fa';

function WeatherDisplay({ weatherData }) {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    };
    return date.toLocaleString('en-US', options);
  };
  const temperatureColor = (temperature) => {
    return temperature > 30 ? '#e74c3c' : '#ffc107'; 
  };

  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case "01d":
        return <FaSun />;
      case "01n":
        return <FaMoon />;
      case "02d":
        return <FaCloudSun />;
      case "02n":
        return <FaCloudMoon />;
      case "03d":
      case "03n":
        return <FaCloud />;
      case "04d":
      case "04n":
        return <FaCloud />;
      case "09d":
      case "09n":
        return <FaCloudShowersHeavy />;
      case "10d":
        return <FaCloudSunRain />;
      case "10n":
        return <FaCloudMoonRain />;
      case "11d":
      case "11n":
        return <FaBolt />;
      case "13d":
      case "13n":
        return <FaSnowflake />;
      case "50d":
      case "50n":
        return <FaSmog />;
      default:
        return null;
    }
  };

  return (
    <>
      {weatherData.map((display) => (
        <div key={display.id} className="weather-details">
          <h1 className="city-name">
            {display.name}, {display.sys.country} ({display.weather[0].description} {getWeatherIcon(display.weather[0].icon)})
          </h1>
          
          <p className="temperature" style={{ color: temperatureColor(display.main.temp) }}>
          <WiThermometer size={32} /> Temperature: {display.main.temp} °C
          </p>
          <p>
            <WiThermometer size={32} /> Feels Like: {display.main.feels_like} °C
          </p>
          <p>
            <WiBarometer size={32} /> Pressure: {display.main.pressure} hPa
          </p>
          <p>
            <WiHumidity size={32} /> Humidity: {display.main.humidity}%
          </p>
          <p>
            <WiSunrise size={32} /> Sunrise: {formatTime(display.sys.sunrise)}
          </p>
          <p>
            <WiSunset size={32} /> Sunset: {formatTime(display.sys.sunset)}
          </p>
          <p>
            <WiBarometer size={32} /> Wind Speed: {display.wind.speed} m/s
          </p>
        </div>
      ))}
    </>
  );
}

export default WeatherDisplay;

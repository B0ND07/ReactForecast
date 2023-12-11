import React from "react";

function WeatherDisplay({weatherData}){
  function formatTime(timestamp){
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      {weatherData.map((display) => (
        <div key={display.id}>
          <h1>{display.name} {display.sys.country}</h1>
          <h1>feels_like:{display.main.feels_like} C</h1>
          <h1>temp:{display.main.temp} C</h1>
          <h1>pressure:{display.main.pressure}</h1>
          <h1>humidity:{display.main.humidity}</h1>
          <h1>Sunrise: {formatTime(display.sys.sunrise)}</h1>
          <h1>Sunset: {formatTime(display.sys.sunset)}</h1>
        </div>
      ))}
    </>
  );
};

export default WeatherDisplay;

import React from "react";
import "./Card.css"

function Card({weatherData}){
  const entityData = [
    {
      entity : "Temperature",
      value: weatherData.current.temp_c + " °C",
    },
    {
      entity : "Humidity",
      value: weatherData.current.humidity + " %",
    },
    {
      entity : "Condition",
      value: weatherData.current.condition.text,
    },
    {
      entity : "Windspeed",
      value: weatherData.current.wind_kph + " kph",
    },
  ];


  return (
    <div className="card-container">
      {entityData.map((data, index)=>(
        <div className="weather-cards" key={index}>
        <h3>{data.entity}</h3>
        <p>{data.value}</p>
      </div>
      ))}
    </div>
  )
}

export default Card;


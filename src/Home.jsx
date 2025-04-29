import React, { useState } from "react";
import Card from "./Card";
import "./Home.css";

function Home() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState("");

  async function handleSearch() {
    try {
      setLoading(true);
      setWeatherData("");
      const apiKey = "436d6401161646ce87f182237251502";
      const apiResponse = await fetch(
        `https://api.weatherapi.com/v1/current.json?Key=${apiKey}&q=${city}`
      );
      if (!apiResponse.ok) {
        throw new Error(`HTTP error! Status: ${apiResponse.status}`);
      }
      const response = await apiResponse.json();
      setWeatherData(response);
      console.log(response);
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Failed to fetch weather data");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <div>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter city name"
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading ? <p>Loading data...</p> : null}
      {weatherData ? (
        <div className="weather-cards">
          <Card weatherData={weatherData} />
        </div>
      ) : null}
    </div>
  );
}

export default Home;

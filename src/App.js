import React, { useState } from "react";
import axios from "axios";
import Weather from "./components/WeatherList";
import Form from "./components/WeatherSearch";
import dayjs from "dayjs";

const baseUrl = "https://api.openweathermap.org/data/2.5";
const apiKey = "e876ad8eedce4610f913d17aaaadae72";

function App() {
  const [dt_txt, setDT_txt] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [icon, setIcon] = useState();
  const [temp, setTemp] = useState();
  const [temp_max, setTemp_max] = useState();
  const [temp_min, setTemp_min] = useState();
  const [description, setDescription] = useState();
  const [feels_like, setFeelsLike] = useState();

  // TO DO: Set up error message
  // const [error, setError] = useState(false);

  const getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;

    if (city) {
      const apiCall = await axios(
        `${baseUrl}/forecast?q=${city}&appid=${apiKey}&units=imperial`

        // TO DO: Set up .env.local file to hide api key
        // `${process.env.REACT_APP_API_URL}/forecast/?q=${city}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`
      );

      const response = await apiCall;
      setDT_txt(response.data.list.dt_txt);
      setCountry(response.data.city.country);
      setCity(response.data.city.name);
      setIcon(response.data.list[0].weather[0].icon);
      setTemp(response.data.list[0].main.temp);
      setTemp_max(response.data.list[0].main.temp_max);
      setTemp_min(response.data.list[0].main.temp_min);
      setDescription(response.data.list[0].weather[0].description);
      setFeelsLike(response.data.list[0].main.feels_like);
    }

    // TO DO: Need error message from api and loading text
    // TO DO: If input is empty and the user clicks the search button, display message stating to enter a city.
    // TO DO: If city is searched and the user deletes the city from the input and then clicks the search button, clear the weather shown and display message stating to enter a city.
    // TO DO: Use custom weather icons from feathericons.com instead of the default openweathermap.org icons
  };
  return (
    <div className="App">
      <Form loadWeather={getWeather} />
      <div className="last-update">
        <p>Last updated on {dayjs(dt_txt).format("dddd, h:mm A")}</p>
      </div>
      <Weather
        icon={icon}
        country={country}
        city={city}
        temp={temp}
        temp_max={temp_max}
        temp_min={temp_min}
        description={description}
        feels_like={feels_like}
      />
    </div>
  );
}

export default App;

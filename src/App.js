import React, { useState } from "react";
import Weather from "./components/WeatherList";
import Form from "./components/WeatherSearch";
import dayjs from "dayjs";
import useOpenWeatherMap from "./hooks/openweatherapi";

function App() {
  const [cityQuery, setCityQuery] = useState(null);
  const { data, isLoading, isError } = useOpenWeatherMap(cityQuery);

  return (
    <div className="App">
      <Form setCity={setCityQuery} />
      <div className="last-update">
        <p>Last updated on {dayjs(data?.dt_txt).format("dddd, h:mm A")}</p>
      </div>
      {isLoading ? <h1 style={{ color: "white" }} >Loading</h1> : null}
      {isError ? <h1 style={{ color: "red" }} >Something Broke</h1> : null}
      {data ?
        <>
          <Weather
            icon={data.icon}
            country={data.country}
            city={data.city}
            temp={data.temp}
            temp_max={data.temp_max}
            temp_min={data.temp_min}
            description={data.description}
            feels_like={data.feels_like}
          />
        </>
        : null
      }

    </div>
  );
}

export default App;

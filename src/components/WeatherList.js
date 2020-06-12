import React from "react";

const Weather = ({
  country,
  city,
  icon,
  temp,
  temp_max,
  temp_min,
  description,
  feels_like,
}) => {
  return (
    <>
      <div className="weather-list">
        <div className="card">
          <div className="icon">
            {icon ? (
              <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="Icon"
              />
            ) : null}
          </div>
          <div className="country">{country ? <p>{country}</p> : null}</div>
          <div className="city">{city ? <h3>{city}</h3> : null}</div>
          <div className="temp">
            {temp ? <h1>{Math.floor(temp)}</h1> : null}
          </div>
          <div className="temp-min-max">
            {temp_min && temp_max ? (
              <ul>
                <li className="temp-min">{Math.floor(temp_min)}</li>
                <li className="temp-max">{Math.floor(temp_max)}</li>
              </ul>
            ) : // <p>
            //   <span className="temp-min">{Math.floor(temp_min)}</span>
            //   <span className="temp-max">{Math.floor(temp_max)}</span>
            // </p>
            null}
          </div>
          <div className="description">
            {description ? <h5>{description}</h5> : null}
          </div>
          <div className="feels-like">
            {feels_like ? <p>Feels like {Math.floor(feels_like)}</p> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;

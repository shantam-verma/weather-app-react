import { useEffect, useState } from "react";

import styles from "../ui/weather.module.css";
import Time from "./Time";

function Weather({ handleCityEnter, weatherData, apiError }) {
  // console.log(weatherData);
  // onValueChange
  // console.log(apiError);
  const [usersCity, setUsersCity] = useState("");
  const { time = "", day = "" } = Time(weatherData?.sys.country);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
  };

  const handleClick = (event) => {
    if (event.key === "Enter") {
      handleCityEnter(event.target.value);
      setUsersCity("");
    }
  };
  // useEffect(() => {
  //   if (weatherData?.sys.country) {
  //     onValueChange(weatherData.sys.country);
  //   }
  // }, [weatherData, onValueChange]);

  return (
    <div className={styles.container}>
      <input
        className={styles.input_area}
        value={capitalizeFirstLetter(usersCity)}
        type="search"
        placeholder="Enter a city"
        onKeyDown={handleClick}
        onChange={(event) => setUsersCity(event.target.value)}
      />

      {apiError !== "Invalid city entered" ? (
        <>
          {weatherData ? (
            <>
              <div className={styles.weather_temp}>
                <img
                  className={styles.weatherimage}
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                />
                <div>
                  <div className={styles.cityname}>
                    <h1>{capitalizeFirstLetter(weatherData.name)}</h1>
                    <span>{weatherData.sys.country}</span>
                  </div>
                  <p>{time}</p>
                  <p>{day}</p>
                </div>

                <h2>{weatherData.main.temp}</h2>
                <div>
                  <h3>°C</h3>
                  <p> Humidity: {weatherData.main.humidity} % </p>
                  <p> Wind: {weatherData.wind.speed} Km/h</p>
                </div>
              </div>
              <div className={styles.weather_info}>
                <div className={`${styles.details} ${styles.detail_bold}`}>
                  <p>{weatherData.weather[0].main}</p>
                  <p>{formatTime(weatherData.sys.sunrise)}</p>
                  <p>{formatTime(weatherData.sys.sunset)}</p>
                  <p>{weatherData.main.temp_min}°C</p>
                  <p>{weatherData.main.temp_max}°C</p>
                </div>
                <div className={`${styles.details} ${styles.detail_size}`}>
                  <p> Weather</p>
                  <p>Sunrise</p>
                  <p>Sunset</p>
                  <p>Min</p>
                  <p>Max</p>
                </div>
              </div>
            </>
          ) : (
            <p className={styles.error}>Ooops! City not found</p>
          )}
        </>
      ) : null}
    </div>
  );
}

export default Weather;

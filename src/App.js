import { useEffect, useState } from "react";
import "./components/ui/style.css";

import Logo from "./components/ui/Logo";
import Weather from "./components/current_weather/Weather";
import FetchApi from "./components/weather_api/FetchApi";

function App() {
  // const [countryCode, setCountryCode] = useState("IN");
  const [weatherData, setWeatherData] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [city, setCity] = useState();

  const handleWeatherClick = (city) => {
    setCity(city);
  };

  const handleCountryCode = (code) => {
    // setCountryCode(code);
    // console.log(code);
  };

  // Step 2
  useEffect(() => {
    async function callWeatherAPI() {
      const { weatherData, apiError } = await FetchApi(city);
      setWeatherData(weatherData);
      setApiError(apiError);
    }
    callWeatherAPI();
  }, [city]);

  // console.info({
  //   weatherData,
  // });

  // Step 1
  return (
    <>
      <Logo />

      <Weather
        handleCityEnter={handleWeatherClick}
        weatherData={weatherData}
        apiError={apiError}
        onValueChange={handleCountryCode}
      />
    </>
  );
}

export default App;

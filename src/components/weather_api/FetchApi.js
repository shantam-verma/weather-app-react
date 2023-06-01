import axios from "axios";

const FetchApi = async (city = "Jaipur") => {
  const apiKey = process.env.REACT_APP_WEATHER_API;

  let weatherData, apiError;
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    weatherData = response.data;
  } catch (error) {
    console.error("Error in fetching city, Stacktrace", error);

    if (error.response.code === "404") {
      apiError = "Invalid city entered";
    }
    apiError = error.message;
    // console.log(apiError);
  }
  return { weatherData, apiError };
};

export default FetchApi;

import { useEffect, useState } from "react";
import ct from "countries-and-timezones";

const Time = (countryCode = "IN") => {
  const [time, setTime] = useState("");
  const [day, setDay] = useState("");

  const country = ct.getCountry(countryCode);
  // console.log(country.timezones[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const rightNow = new Date();
      const day = rightNow.toLocaleString("en-US", {
        timeZone: country.timezones[0],
        year: "numeric",
        weekday: "short",
        month: "short",
        day: "2-digit",
      });

      const time = rightNow.toLocaleTimeString("en-US", {
        timeZone: country.timezones[0],
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      setTime(time);
      setDay(day);
    }, 1000);
    return () => clearInterval(interval);
  }, [countryCode]);

  return { time, day };
};

export default Time;

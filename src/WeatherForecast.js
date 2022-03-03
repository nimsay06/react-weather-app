import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let longitude = props.coordinates.long;
  let latitude = props.coordinates.lat;
  let apiKey = `763b250b80fa958302cdd5a87d7a2da5`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">thu</div>
          <WeatherIcon code="01d" size={20} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-maxTemp">19</span>{" "}
            <span className="WeatherForecast-minTemp">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}

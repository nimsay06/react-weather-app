import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="TempElement">
      <span className="temperature"> {Math.round(props.celsius)} </span>
      <span className="unit">°C </span>
    </div>
  );
}

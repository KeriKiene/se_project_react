import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const weatherOption = weatherOptions.find((option) => {
    return (
      option.condition === weatherData.condition &&
      option.day === weatherData.isDay
    );
  });

  const weatherOptionUrl = weatherOption?.url;
  const weatherOptionCondition = weatherOption?.condition;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {currentTemperatureUnit === "F"
          ? weatherData.temp.F
          : weatherData.temp.C}{" "}
        &deg; {currentTemperatureUnit}
      </p>
      <img
        src={weatherOptionUrl}
        alt={`${weatherOptionCondition}`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;

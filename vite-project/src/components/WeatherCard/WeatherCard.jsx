import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData }) {
  const weatherOption = weatherOptions.find((option) => {
    return option.condition === weatherData.condition;
  });
  console.log("weatherData.condition:", weatherData.condition);

  const weatherOptionUrl = weatherOption?.url;
  const weatherOptionCondition = weatherOption?.condition;

  console.log("weatherOption:", weatherOption);
  console.log("weatherOptionUrl:", weatherOptionUrl);
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F} &deg; F</p>
      <img
        src={weatherOptionUrl}
        alt={`${weatherOptionCondition}`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;

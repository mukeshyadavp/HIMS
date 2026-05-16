import { Cloud, Droplets, Wind, Thermometer } from "lucide-react";
import "./WeatherCard.css";

const weatherData = [
  { district: "Vijayawada", temp: "34°C", humidity: "72%", rainfall: "12 mm", wind: "18 km/h", condition: "Partly Cloudy" },
  { district: "Guntur", temp: "36°C", humidity: "68%", rainfall: "0 mm", wind: "14 km/h", condition: "Sunny" },
  { district: "Kurnool", temp: "38°C", humidity: "55%", rainfall: "0 mm", wind: "22 km/h", condition: "Hot & Dry" },
  { district: "Tirupati", temp: "31°C", humidity: "80%", rainfall: "28 mm", wind: "10 km/h", condition: "Heavy Rain" },
];

const WeatherCard = () => {
  return (
    <div className="weather-card">
      <h3 className="weather-title">
        <Cloud size={18} style={{ marginRight: 8 }} />
        District Weather Overview
      </h3>
      <div className="weather-grid">
        {weatherData.map((w, i) => (
          <div className="weather-item" key={i}>
            <div className="weather-district">{w.district}</div>
            <div className="weather-condition">{w.condition}</div>
            <div className="weather-stats">
              <span><Thermometer size={14} /> {w.temp}</span>
              <span><Droplets size={14} /> {w.humidity}</span>
              <span><Wind size={14} /> {w.wind}</span>
            </div>
            <div className="weather-rainfall">Rainfall: {w.rainfall}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;

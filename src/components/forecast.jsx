import React from 'react';
import { URL } from '../helpers/api';
import { dateConverter, timeConverter } from '../helpers/dateConverters';

function WeatherForecast({ cityInfo, forecastInfo }) {
  let forecastItems = [];
  forecastItems = forecastInfo.list;

  return (
    <div className="current-weather__forecast">
      <p className="forecast__city city-name">{cityInfo.name}</p>
      <div className="forecast__weather-timetable">
        {forecastItems.map((item, index) => (
          <div key={index} className="forecast__weather-item">
            <p className="weather-timetable__date">{dateConverter(item.dt)}</p>
            <p className="weather-timetable__time">{timeConverter(item.dt)}</p>
            <p className="weather-timetable__temp">
              Temperature: {Math.round(item.main.temp)}°<br />
              Feels like: {Math.round(item.main.feels_like)}°
            </p>
            <div className="wearher-timetable__precipitation">
              <p className="precipitation__title">{item.weather[0].main}</p>
              <img
                className="precipitation__img"
                src={`${URL.ICONS}${item.weather[0].icon}@4x.png`}
                alt="precipitation_icon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherForecast;

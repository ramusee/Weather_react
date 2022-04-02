import React from 'react';

function WeatherDetails({ cityInfo }) {
  return (
    <div className="current-weather__details">
      <p className="details__city city-name">{cityInfo.name}</p>
      <ul className="details__list">
        <li className="details__item temp">
          Temperature: {cityInfo.temperature}
        </li>
        <li className="details__item feels-like">
          Feels like: {cityInfo.details.feels_like}
        </li>
        <li className="details__item details-weather">
          Weather: {cityInfo.details.weather}
        </li>
        <li className="details__item sunrise">
          Sunrise: {cityInfo.details.sunrise}
        </li>
        <li className="details__item sunset">
          Sunset: {cityInfo.details.sunset}
        </li>
      </ul>
    </div>
  );
}

export default WeatherDetails;

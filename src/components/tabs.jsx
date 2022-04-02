import React from 'react';
import WeatherNow from './now';
import WeatherDetails from './details';
import WeatherForecast from './forecast';
import { BUTTONS_VALUE } from './buttonList';

function Tabs({ pressedButton, cityInfo, forecastInfo, onSetFavoriteCity }) {
  switch (pressedButton) {
    case BUTTONS_VALUE.NOW:
      return <WeatherNow cityInfo={cityInfo} onSetFavoriteCity={onSetFavoriteCity} />;
    case BUTTONS_VALUE.DETAILS:
      return <WeatherDetails cityInfo={cityInfo} />;
    case BUTTONS_VALUE.FORECAST:
      return (
        <WeatherForecast cityInfo={cityInfo} forecastInfo={forecastInfo} />
      );
    default:
      return null;
  }
}

export default Tabs;

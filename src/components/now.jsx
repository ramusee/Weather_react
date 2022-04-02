import React, { useState } from 'react';
import storage from '../helpers/storage';

function WeatherNow({
  cityInfo,
  onHandleFavCities,
  favoriteCities,
  onHandleDelFavCity,
}) {
  const [toggleBtn, setToggleBtn] = useState({ isToggle: false });
  const classes = ['now__btn_heart'];

  favoriteCities.has(cityInfo.name)
    ? (toggleBtn.isToggle = true)
    : (toggleBtn.isToggle = false);

  function onToggle() {
    setToggleBtn({ isToggle: !toggleBtn.isToggle });
    favoriteCities.has(cityInfo.name)
      ? onHandleDelFavCity(cityInfo.name)
      : onHandleFavCities(cityInfo.name);
    console.log(favoriteCities);
  }
  if (toggleBtn.isToggle) classes.push('now__btn_active');

  return (
    <div className="current-weather__now">
      <p className="now__temperature tab">{cityInfo.temperature}</p>
      <img className="now__img" src={cityInfo.image} alt="" />
      <div className="now-wrapper">
        <p className="now__city city-name">{cityInfo.name}</p>
        <button onClick={onToggle} className={classes.join(' ')}></button>
      </div>
    </div>
  );
}

export default WeatherNow;

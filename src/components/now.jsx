import React, { useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addLocation, removeLocation} from "../appState/actions";

function WeatherNow({
  cityInfo
}) {
  const [toggleBtn, setToggleBtn] = useState({ isToggle: false });
  const classes = ['now__btn_heart'];
  const favoriteCities = useSelector(state => state.locations)
  const dispatch = useDispatch()

  favoriteCities.includes(cityInfo.name)
    ? (toggleBtn.isToggle = true)
    : (toggleBtn.isToggle = false);

  function onToggle() {
    setToggleBtn({ isToggle: !toggleBtn.isToggle });
    !favoriteCities.includes(cityInfo.name)
      ? dispatch(addLocation(cityInfo.name))
      : dispatch(removeLocation(cityInfo.name));
  }
  if (toggleBtn.isToggle) classes.push('now__btn_active');

  return (
    <div className="current-weather__now">
      <p className="now__temperature tab">{cityInfo.temperature}</p>
      <img className="now__img" src={cityInfo.image} alt="" />
      <div className="now-wrapper">
        <p className="now__city city-name">{cityInfo.name}</p>
        <button onClick={onToggle} className={classes.join(' ')}/>
      </div>
    </div>
  );
}

export default WeatherNow;

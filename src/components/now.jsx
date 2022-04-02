import React, {useState} from 'react';

function WeatherNow({cityInfo, onSetFavoriteCity}) {
  const[toggleBtn, setToggleBtn] = useState({isToggle: false})
  const classes=['now__btn_heart']
  
  function onToggle(){
    setToggleBtn({isToggle: !toggleBtn.isToggle})
    onSetFavoriteCity([...favoriteCities, cityInfo.name])
  }
  if(toggleBtn.isToggle) classes.push('now__btn_active')

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

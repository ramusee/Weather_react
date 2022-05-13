import React, {useState, useEffect} from 'react';
import WeatherSearch from './components/search';
import AddedLocations from './components/addedLocations';
import Tabs from './components/tabs';
import {ButtonList} from './components/buttonList';
import CurrentButton from './context';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentLocation} from "./appState/actions";
import {fetchForecast, fetchWeather} from "./appState/asyncActions";
import {getCurrentLocation, getForecast, getWeather} from "./appState/selectors";
import Cookies from "js-cookie";

function Weather() {
  const [button, setButton] = useState('Now');

  useEffect(async () => {
    await handleCityName(currentCity);
  }, []);

  const dispatch = useDispatch()
  const currentCity = useSelector(getCurrentLocation)
  const cityInfo = useSelector(getWeather)
  const forecastInfo = useSelector(getForecast)

  async function handleCityName(cityName) {
    if(!cityName) return
    dispatch(setCurrentLocation(cityName))
    dispatch(fetchWeather(cityName))
    dispatch(fetchForecast(cityName))
    Cookies.set('currentCity', cityName, {expires: 1 / 24})
  }

  return (<div className="weather">
    <WeatherSearch onHandleCityName={handleCityName}/>
    <div className="container">
      <div className="current-weather">
        <Tabs
          pressedButton={button}
          cityInfo={cityInfo}
          forecastInfo={forecastInfo}
        />
        <CurrentButton.Provider value={{button, setButton}}>
          <ButtonList/>
        </CurrentButton.Provider>
      </div>
      <AddedLocations
        onHandleCityName={handleCityName}
      />
    </div>
  </div>);
}

export default Weather;

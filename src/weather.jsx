import React, {useState, useEffect} from 'react';
import {URL} from './helpers/api';
import {getCityData, getForecastData} from './helpers/api';
import {timeConverter} from './helpers/dateConverters';
import WeatherSearch from './components/search';
import AddedLocations from './components/addedLocations';
import Tabs from './components/tabs';
import {ButtonList} from './components/buttonList';
import CurrentButton from './context';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentLocation} from "./appState/actions";

function Weather() {
  const [button, setButton] = useState('Now');
  const [cityInfo, setCityInfo] = useState('');
  const [forecastInfo, setForecastInfo] = useState('');

  useEffect(async () => {
    await handleCityName(currentCity);
  }, []);

  const dispatch = useDispatch()
  const currentCity = useSelector(state => state.currentLocation)
  async function handleCityName(cityName) {
    const cityData = await getCityData(cityName);
    const forecastData = await getForecastData(cityName);
    if (!cityData || !forecastData) return;
    const weatherData = {
      name: cityData.name,
      temperature: Math.round(cityData.main.temp) + '°',
      image: `${URL.ICONS}${cityData.weather[0].icon}@4x.png`,
      details: {
        feels_like: Math.round(cityData.main.feels_like) + '°',
        weather: cityData.weather[0].main,
        sunrise: timeConverter(cityData.sys.sunrise),
        sunset: timeConverter(cityData.sys.sunset),
      },
    };
    setCityInfo(weatherData);
    setForecastInfo(forecastData);
    dispatch(setCurrentLocation(cityName))
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

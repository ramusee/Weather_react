import React, { useState, useEffect } from 'react';
import WeatherSearch from './components/search';
import AddedLocations from './components/addedLocations';
import Tabs from './components/tabs';
import { ButtonList } from './components/buttonList';
import { getCityData, getForecastData } from './helpers/api';
import { URL } from './helpers/api';
import { timeConverter } from './helpers/dateConverters';
import storage from './helpers/storage';

function Weather() {
  const [button, setButton] = useState('Now');
  const [cityInfo, setCityInfo] = useState('');
  const [forecastInfo, setForecastInfo] = useState('');
  const [favoriteCities, setFavoriteCities] = useState([])

  // useEffect(async () => await handleCityName('Samara'), []);
  useEffect(() => {
    setFavoriteCities(new Set(storage.getFavoriteCities()))
  },[])

  useEffect (()=> {
    setFavoriteCities([...favoriteCities, cityInfo.name]);
  },[])

  function changeTab(tapedButton) {
    setButton(tapedButton);
  }

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
  }

  return (
    <div className="weather">
      <WeatherSearch onHandleCityName={handleCityName} />
      <div className="container">
        <div className="current-weather">
          <Tabs
            pressedButton={button}
            cityInfo={cityInfo}
            forecastInfo={forecastInfo}
            onSetFavoriteCity={setFavoriteCities}
          />
          <ButtonList onChangeTab={changeTab} />
        </div>
        <AddedLocations cityInfo={cityInfo} onHandleCityName={handleCityName} favoriteCities={favoriteCities} />
      </div>
    </div>
  );
}

export default Weather;

import React, {useState, useEffect} from 'react';
import storage from './helpers/storage';
import {URL} from './helpers/api';
import {getCityData, getForecastData} from './helpers/api';
import {timeConverter} from './helpers/dateConverters';
import Cookies from 'js-cookie';
import WeatherSearch from './components/search';
import AddedLocations from './components/addedLocations';
import Tabs from './components/tabs';
import {ButtonList} from './components/buttonList';
import CurrentButton from './context';
import {setCurrentLocation, removeLocation, addLocation} from './appState/actions';
import store from './appState/store';

function Weather() {
  const [button, setButton] = useState('Now');
  const [cityInfo, setCityInfo] = useState('');
  const [forecastInfo, setForecastInfo] = useState('');
  // const [favoriteCities, setFavoriteCities] = useState(new Set());

  useEffect(async () => {
    await handleCityName(currentCity);
  }, []);

  useEffect(() => {
    store.dispatch(addLocation(storage.getFavoriteCities()))
  }, []);

  const currentCity = Cookies.get('currentCity') ? Cookies.get('currentCity') : 'Moscow';

  function handleFavCities(cityName) {
    const addedCities = new Set(storage.getFavoriteCities());
    addedCities.add(cityName);
    storage.saveFavoriteCities(addedCities);
    store.dispatch(addLocation(Array.from(addedCities)));
  }

  function handleDelFavCity(cityName) {
    const addedCities = new Set(storage.getFavoriteCities());
    addedCities.delete(cityName);
    storage.saveFavoriteCities(addedCities);
    store.dispatch(removeLocation(Array.from(addedCities)));
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
    Cookies.set('currentCity', weatherData.name, {expires: 1 / 24});
  }

  return (<div className="weather">
    <WeatherSearch onHandleCityName={handleCityName}/>
    <div className="container">
      <div className="current-weather">

        <Tabs
          pressedButton={button}
          cityInfo={cityInfo}
          forecastInfo={forecastInfo}
          onHandleFavCities={handleFavCities}
          onHandleDelFavCity={handleDelFavCity}
        />
        <CurrentButton.Provider value={{button, setButton}}>
          <ButtonList/>
        </CurrentButton.Provider>
      </div>
      <AddedLocations
        onHandleCityName={handleCityName}
        onHandleDelFavCity={handleDelFavCity}
      />
    </div>
  </div>);
}

export default Weather;

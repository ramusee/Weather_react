import {URL} from "../helpers/api";
import {timeConverter} from "../helpers/dateConverters";

const ACTION_TYPES = {
  ADD_LOCATION: 'ADD_LOCATION',
  REMOVE_LOCATION: 'REMOVE_LOCATION',
  SET_CURRENT_LOCATION: 'SET_CURRENT_LOCATION',
  ADD_WEATHER: 'ADD_WEATHER',
  ADD_FORECAST: 'ADD_FORECAST',
}

function addWeather(locationData) {
  return {
    type: ACTION_TYPES.ADD_WEATHER,
    weather: {
      name: locationData.name,
      temperature: Math.round(locationData.main.temp) + '°',
      image: `${URL.ICONS}${locationData.weather[0].icon}@4x.png`,
      details: {
        feels_like: Math.round(locationData.main.feels_like) + '°',
        weather: locationData.weather[0].main,
        sunrise: timeConverter(locationData.sys.sunrise),
        sunset: timeConverter(locationData.sys.sunset),
      },
    }
  }
}

function addForecast(forecast) {
  return {
    type: ACTION_TYPES.ADD_FORECAST,
    forecast
  }
}

function addLocation(location) {
  return {
    type: ACTION_TYPES.ADD_LOCATION,
    location
  }
}

function removeLocation(location) {
  return {
    type: ACTION_TYPES.REMOVE_LOCATION,
    location
  }
}

function setCurrentLocation(location) {
  return {
    type: ACTION_TYPES.SET_CURRENT_LOCATION,
    location
  }
}

// function actionCreator(type) {
//   return function (payload) {
//     return {
//       type,
//       payload,
//     }
//   }
// }

export {ACTION_TYPES, addLocation, removeLocation, setCurrentLocation, addWeather, addForecast}
import {getCityData, getForecastData} from "../helpers/api";
import {addWeather, addForecast, setCurrentLocation} from "./actions";

export function fetchWeather(location) {
  return function (dispatch) {
    getCityData(location)
      .then(locationData => {
          if (!locationData) return dispatch(setCurrentLocation('Samara'))
            dispatch(addWeather(locationData))
        }
      )
  }
}

export function fetchForecast(location) {
  return function (dispatch) {
    getForecastData(location)
      .then(forecastData => {
        if (!forecastData) return
          dispatch(addForecast(forecastData))
        }
      )
  }
}
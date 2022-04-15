import {ACTION_TYPES} from "./actions";
import storage from "../helpers/localStorage";
import Cookies from "js-cookie";

const initialState = {
  currentLocation: Cookies.get('currentCity') ? Cookies.get('currentCity') : 'Samara',
  locations: storage.getFavoriteCities(),
  weather: {},
  forecast: {},
}

function addedLocations(state = [], action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_LOCATION:
      if (state.includes(action.location)) return
      return [...state, action.location]
    case ACTION_TYPES.REMOVE_LOCATION:
      return state.filter(item => item !== action.location)
    default:
      return state
  }
}

function setCurrentLocation(state = initialState.currentLocation, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_CURRENT_LOCATION:
      return action.location
    default:
      return state
  }
}

function addWeather(state = {}, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_WEATHER:
      return action.weather
    default:
      return state
  }
}

function addForecast(state = {}, action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_FORECAST:
      return action.forecast
    default:
      return state
  }
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_CURRENT_LOCATION:
      return Object.assign({}, state, {
          currentLocation: setCurrentLocation(state.currentLocation, action)
        }
      )
    case ACTION_TYPES.ADD_LOCATION:
      return Object.assign({}, state, {
        locations: addedLocations(state.locations, action)
      })
    case ACTION_TYPES.REMOVE_LOCATION:
      return Object.assign({}, state, {
        locations: addedLocations(state.locations, action)
      })
    case ACTION_TYPES.ADD_WEATHER:
      return Object.assign({}, state, {
        weather: addWeather(state.weather, action)
      })
    case ACTION_TYPES.ADD_FORECAST:
      return Object.assign({}, state, {
        forecast: addForecast(state.forecast, action)
      })
    default:
      return state
  }
}

export default rootReducer

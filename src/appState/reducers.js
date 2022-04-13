import {ACTION_TYPES} from "./actions";
import storage from "../helpers/localStorage";
import Cookies from "js-cookie";

const initialState = {
  currentLocation: Cookies.get('currentCity') ? Cookies.get('currentCity') : 'Moscow',
  locations: storage.getFavoriteCities(),
}

function addedLocations(state = [], action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_LOCATION:
      if (state.includes(action.location)) return
      const newState = [...state, action.location]
      storage.saveFavoriteCities(newState);
      return newState
    case ACTION_TYPES.REMOVE_LOCATION:
      const _newState = state.filter(item => item !== action.location)
      storage.saveFavoriteCities(_newState);
      return _newState
    default:
      return state
  }
}

function setCurrentLocation(state = '', action) {
  switch (action.type) {
    case ACTION_TYPES.SET_CURRENT_LOCATION:
      Cookies.set('currentCity', action.location, {expires: 1 / 24})
      return action.location
  }
}

function rootReduce(state = initialState, action) {
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
    default:
      return state
  }
}

export default rootReduce

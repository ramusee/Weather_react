import {ACTION_TYPES} from "./actions";
import storage from "../helpers/storage";
import Cookies from "js-cookie";

const initialState = {
  currentLocation: Cookies.get('currentCity') ? Cookies.get('currentCity') : 'Moscow',
  locations: storage.getFavoriteCities(),
}

function addedLocations(state = [], action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_LOCATION:
      if(state.includes(action.location)) return
      const addedCities = new Set(storage.getFavoriteCities());
      addedCities.add(action.location);
      storage.saveFavoriteCities(addedCities);
      return [...state, action.location]
    case ACTION_TYPES.REMOVE_LOCATION:
      const _addedCities = new Set(storage.getFavoriteCities());
      _addedCities.delete(action.location);
      storage.saveFavoriteCities(_addedCities);
      return state.filter(item => item !== action.location)
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

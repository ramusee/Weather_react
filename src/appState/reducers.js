import {ACTION_TYPES} from "./actions";

const initialState = {
  currentLocation: 'Samara',
  locations: [],
}

function addedLocations(state = [], action) {
  switch (action.type) {
    case ACTION_TYPES.ADD_LOCATION:
      return [...state, action.location]
    case ACTION_TYPES.REMOVE_LOCATION:
      return state.filter(item => item !== action.location)
    default:
      return state
  }
}

function rootReduce(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_CURRENT_LOCATION:
      return Object.assign({}, state, {
          currentLocation: action.location
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

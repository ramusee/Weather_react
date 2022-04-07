const ACTION_TYPES = {
  ADD_LOCATION: 'ADD_LOCATION',
  REMOVE_LOCATION: 'REMOVE_LOCATION',
  SET_CURRENT_LOCATION: 'SET_CURRENT_LOCATION',
}

function addLocation(location) {
  console.log(location)
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

export {ACTION_TYPES, addLocation, removeLocation, setCurrentLocation}
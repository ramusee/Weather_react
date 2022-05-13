import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {removeLocation} from "../appState/actions";
import storage from "../helpers/localStorage";
import store from "../appState/store";

function AddedLocations({onHandleCityName}) {

  const favoriteCities = useSelector(state => state.locations)
  const dispatch = useDispatch()

  function handleCityItem(e) {
    const cityName = e.target.textContent;
    if (cityName === store.getState().currentLocation) return
    onHandleCityName(cityName)
  }

  function onDelFavCity(cityName) {
    dispatch(removeLocation(cityName))
    storage.saveFavoriteCities(store.getState().locations)
  }

  return (
    <div className="locations">
      <div className="locations__header">
        <p className="locations__title">Added locations:</p>
      </div>
      <div className="cities__list">
        {favoriteCities.length === 0 ? null : favoriteCities.map((item, index) => (
          <div key={index} onClick={handleCityItem} className="cities__item">
            <p className="added-city">{item}</p>
            <button onClick={() => onDelFavCity(item)} className="cities__delete-btn" type="button"/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddedLocations;

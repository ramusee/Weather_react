import React, { useState, useEffect } from 'react';
import storage from '../helpers/storage';
function AddedLocations({ cityInfo, favoriteCities}) {

  function handleCityItem(e) {
    const cityName = e.target.textContent;
    onHandleCityName(cityName);
  }

  return (
    <div className="locations">
      <div className="locations__header">
        <p className="locations__title">Added locations:</p>
      </div>
      <div className="cities__list">
        {favoriteCities ? favoriteCities.map((item, index) => (
          <div key={index} onClick={handleCityItem} className="cities__item">
            <p className="added-city">{item}</p>
            <button className="cities__delete-btn" type="button"></button>
          </div>
        )) : null}
      </div>
    </div>
  );
}

export default AddedLocations;

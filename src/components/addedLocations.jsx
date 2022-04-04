import React from 'react';

function AddedLocations({ onHandleCityName, favoriteCities, onHandleDelFavCity}) {

  function handleCityItem(e) {
    const cityName = e.target.textContent;
    onHandleCityName(cityName);
  }
  function onDelFavCity(cityName){
    onHandleDelFavCity(cityName)
  }
  return (
    <div className="locations">
      <div className="locations__header">
        <p className="locations__title">Added locations:</p>
      </div>
      <div className="cities__list">
        {favoriteCities.length === 0 ? null : Array.from(favoriteCities).map((item, index) => (
          <div key={index} onClick={handleCityItem} className="cities__item">
            <p className="added-city">{item}</p>
            <button onClick={()=> onDelFavCity(item)} className="cities__delete-btn" type="button"></button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddedLocations;

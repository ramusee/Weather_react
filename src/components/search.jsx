import React, { useState } from 'react';

function WeatherSearch({onHandleCityName}) {
  const [inputValue, setInputValue] = useState('');

  function onChange(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onHandleCityName(inputValue);
    setInputValue('');
  }
  return (
    <form className="weather__search" onSubmit={handleSubmit}>
      <input
        className="search__input"
        value={inputValue}
        onChange={onChange}
        type="text"
        placeholder="Location"
      />
      <input type="submit" className="search__btn" value="" />
    </form>
  );
}

export default WeatherSearch;

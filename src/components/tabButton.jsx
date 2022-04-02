import React from 'react';
import { useState } from 'react';

function TabButton({ name, onHandleTapButton}) {
  const [classes, setActive] = useState(['tabs__item-btn']);

  function handleOnClick(e) {
    onHandleTapButton(e.target.textContent);
  }

  return (
    <button onClick={handleOnClick} className={classes.join(' ')} type="button">
      {name}
    </button>
  );
}
export default TabButton;

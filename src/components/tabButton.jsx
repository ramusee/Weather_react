import React from 'react';
import { useState } from 'react';

function TabButton({ name, onHandleTapButton, currentTab }) {
  const [classes, setActive] = useState(new Set());
  classes.add('tabs__item-btn');

  function handleOnClick(e) {
    onHandleTapButton(e.target.textContent);
  }

  currentTab === name ? classes.add('active') : classes.delete('active');

  return (
    <button
      onClick={handleOnClick}
      className={Array.from(classes).join(' ')}
      type="button"
    >
      {name}
    </button>
  );
}
export default TabButton;

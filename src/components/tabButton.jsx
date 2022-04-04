import React, {useContext} from 'react';
import CurrentButton from "../context";

function TabButton({ name }) {
  const {button, setButton} = useContext(CurrentButton)

  const classes = new Set();
  classes.add('tabs__item-btn');

  function handleOnClick(e) {
    setButton(e.target.textContent);
  }

  button === name ? classes.add('active') : classes.delete('active');

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

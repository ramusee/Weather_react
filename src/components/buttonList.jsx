import React, { useState } from 'react';
import TabButton from './tabButton';

export const BUTTONS_VALUE = {
  NOW: 'Now',
  DETAILS: 'Details',
  FORECAST: 'Forecast',
};

export function ButtonList({ onChangeTab, currentTab }) {
  function handleTapButton(button) {
    onChangeTab(button);
  }
  return (
    <div className="tabs">
      <ul className="tabs__list">
        <li className="tabs__item">
          <TabButton
            onHandleTapButton={handleTapButton}
            currentTab={currentTab}
            name={BUTTONS_VALUE.NOW}
          />
        </li>
        <li className="tabs__item">
          <TabButton
            onHandleTapButton={handleTapButton}
            currentTab={currentTab}
            name={BUTTONS_VALUE.DETAILS}
          />
        </li>
        <li className="tabs__item">
          <TabButton
            onHandleTapButton={handleTapButton}
            currentTab={currentTab}
            name={BUTTONS_VALUE.FORECAST}
          />
        </li>
      </ul>
    </div>
  );
}

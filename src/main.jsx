import React from 'react'
import ReactDOM from 'react-dom'
import Weather from './weather'
import {Provider} from "react-redux";
import store from "./appState/store";

ReactDOM.render(
  <Provider store={store}>
    <Weather/>
  </Provider>,
  document.getElementById('root')
)

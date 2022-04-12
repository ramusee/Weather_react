import {applyMiddleware, createStore} from 'redux';
import rootReduce from './reducers.js'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(rootReduce, composeWithDevTools(applyMiddleware(thunk)))

export default store
import {createStore} from 'redux';
import rootReduce from './reducers.js'

const store = createStore(rootReduce)

export default store
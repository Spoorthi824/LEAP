// src/store/store.js
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer); // No middleware applied

export default store;
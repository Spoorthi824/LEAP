// src/store/reducers.js
import { SET_USER, SET_TASKS } from './actions';

const initialState = {
  user: null,
  tasks: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_TASKS:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
};

export default userReducer;

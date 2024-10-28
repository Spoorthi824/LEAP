// src/store/actions.js
import axios from '../services/apei';

// Action Types
export const SET_USER = 'SET_USER';
export const SET_TASKS = 'SET_TASKS';

// Action Creators
export const setUser = (user) => ({ type: SET_USER, payload: user });
export const setTasks = (tasks) => ({ type: SET_TASKS, payload: tasks });

export const fetchUser = () => async (dispatch) => {
  try {
    const response = await axios.get('/user');
    dispatch(setUser(response.data));
  } catch (error) {
    console.error('Error fetching user:', error);
  }
};

export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await axios.get('/tasks');
    dispatch(setTasks(response.data));
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

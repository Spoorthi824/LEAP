// src/components/Dashboard/DailyTasks.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../store/actions';

const DailyTasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.user.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h3>Daily Health To-Do List</h3>
      {tasks.map((task) => (
        <div key={task.id}>
          <input type="checkbox" checked={task.completed} />
          <label>{task.description}</label>
        </div>
      ))}
    </div>
  );
};

export default DailyTasks;

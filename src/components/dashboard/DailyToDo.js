// DailyToDo.js
import React, { useState } from 'react';
import './DailyToDo.css';

const initialTasks = [
  { id: 1, title: 'Exercise', description: '30 minutes workout', points: 20, completed: false },
  { id: 2, title: 'Hydrate', description: 'Drink 8 glasses of water', points: 10, completed: false },
  { id: 3, title: 'Meal Planning', description: 'Plan balanced meals', points: 15, completed: false },
  { id: 4, title: 'Household Chores', description: '15 minutes of chores', points: 5, completed: false },
];

function DailyToDo() {
  const [tasks, setTasks] = useState(initialTasks);
  const [totalPoints, setTotalPoints] = useState(0);

  const handleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);

    const earnedPoints = updatedTasks.reduce(
      (acc, task) => (task.completed ? acc + task.points : acc),
      0
    );
    setTotalPoints(earnedPoints);
  };

  const maxPoints = tasks.reduce((acc, task) => acc + task.points, 0);
  const progressPercentage = (totalPoints / maxPoints) * 100;

  return (
    <div className="daily-todo">
      <h1>Daily To-Do List</h1>
      <p>Earn points by completing daily health tasks!</p>

      <div className="task-list">
        {tasks.map((task) => (
          <div key={task.id} className={`task-card ${task.completed ? 'completed' : ''}`}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={() => handleTaskCompletion(task.id)} disabled={task.completed}>
              {task.completed ? 'Completed' : 'Complete Task'}
            </button>
          </div>
        ))}
      </div>

      <div className="progress-tracker">
        <p>Total Points: {totalPoints} / {maxPoints}</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default DailyToDo;

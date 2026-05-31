import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, toggleComplete, editTask }) {
  if (tasks.length === 0) {
    return <p className="no-tasks">No tasks here!</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
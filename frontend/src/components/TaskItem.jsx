import { useState } from 'react';

function TaskItem({ task, deleteTask, toggleComplete, editTask }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);

  const handleEdit = () => {
    if (editTitle.trim() === '') return;
    editTask(task._id, { title: editTitle });
    setIsEditing(false);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task._id)}
      />

      {isEditing ? (
        <input
          className="edit-input"
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
        />
      ) : (
        <span className="task-title">{task.title}</span>
      )}

      <div className="task-buttons">
        {isEditing ? (
          <>
            <button onClick={handleEdit}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </>
        )}
      </div>

    </li>
  );
}

export default TaskItem;
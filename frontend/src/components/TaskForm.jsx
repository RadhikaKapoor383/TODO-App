import React, { useState } from 'react';
function TaskForm({ addTask }) {

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted! Title:', title);

    if (title.trim() === '') {
      return;
    }
    addTask({ title });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => {
          console.log('Typing:', e.target.value); // ← add this
          setTitle(e.target.value);
        }}
        placeholder="Add a new task..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
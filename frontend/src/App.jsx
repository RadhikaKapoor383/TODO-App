import { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./App.css";

const API_URL = "http://localhost:5000/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = async (task) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });
      const newTask = await response.json();
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });
      const updatedTask = await response.json();
      setTasks(tasks.map(task =>
        task._id === id ? updatedTask : task
      ));
    } catch (error) {
      console.log('Error editing task:', error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const toggleComplete = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: 'PATCH' });
      const updatedTask = await response.json();
      setTasks(tasks.map(task =>
        task._id === id ? updatedTask : task
      ));
    } catch (error) {
      console.log('Error updating task:', error);
    }
  };

  return (
    <div className="app">
      <h1>My To-Do App</h1>

      <TaskForm addTask={addTask} />

      {/* Filter Buttons */}
      <div className="filters">
        <button
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >All</button>

        <button
          onClick={() => setFilter('pending')}
          className={filter === 'pending' ? 'active' : ''}
        >Pending</button>

        <button
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'active' : ''}
        >Completed</button>
      </div>

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import "./index.css";
import TodoForm from "./Components/TodoForm";
import FilterButtons from "./Components/FilterButtons";
import TodoList from "./Components/TodoList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  ///////// this are reusable function thats why we are writing in parent component////////////////////////
  // I we have large application we will make seprate parent component for todo itself this APP.jsx is  for routing and dynamic data.
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([{ id: tasks.length + 1, title, completed: false }, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") {
      return task.completed;
    } else if (filter === "incomplete") {
      return !task.completed;
    } else {
      return true;
    }
  });

  //////////////////////////

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Todo List</h1>
        <div className="mb-4">
          <TodoForm addTask={addTask} />
        </div>
        <FilterButtons filter={filter} setFilter={setFilter} />
        <div className="mt-8">
          <TodoList
            tasks={filteredTasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

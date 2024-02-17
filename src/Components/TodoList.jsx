import React from "react";

const TodoList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">Please add a task</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between py-4"
            >
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span
                  className={task.completed ? "line-through text-gray-400" : ""}
                >
                  {task.title}
                </span>
              </label>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-600 hover:text-red-800 focus:outline-none focus:text-red-800"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;

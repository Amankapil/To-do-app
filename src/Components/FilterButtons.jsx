// FilterButtons.js
import React from "react";

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => setFilter("all")}
        className={`text-gray-600 hover:text-gray-900 focus:outline-none ${
          filter === "all" ? "font-bold" : ""
        }`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`text-gray-600 hover:text-gray-900 focus:outline-none ${
          filter === "completed" ? "font-bold" : ""
        }`}
      >
        Completed
      </button>
      <button
        onClick={() => setFilter("incomplete")}
        className={`text-gray-600 hover:text-gray-900 focus:outline-none ${
          filter === "incomplete" ? "font-bold" : ""
        }`}
      >
        Incomplete
      </button>
    </div>
  );
};

export default FilterButtons;

import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function AddTaskModal({ isOpen, onClose, onAdd }) {
  const [title, setTitle] = useState("");
  const [column, setColumn] = useState("todo");

  const handleSubmit = () => {
    if (title.trim() === "") return;

    onAdd(title, column);
    setTitle("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-80 p-5 rounded-xl shadow-xl animate-fadeIn">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add New Task</h2>
          <FaTimes
            className="cursor-pointer text-gray-600 hover:text-black"
            onClick={onClose}
          />
        </div>

        {/* Input */}
        <input
          className="w-full border rounded-lg p-2 mb-3 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Task name..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Select Column */}
        <select
          className="w-full border rounded-lg p-2 mb-4"
          value={column}
          onChange={(e) => setColumn(e.target.value)}
        >
          <option value="todo">To Do</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>

        {/* Button */}
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={handleSubmit}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

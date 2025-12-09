import { DragDropContext } from "@hello-pangea/dnd";
import { initialTasks } from "../data/tasks";
import TaskColumn from "../components/TaskColumn";
import AddTaskModal from "./AddTaskModal";
import { FaPlus } from "react-icons/fa";
import React, { useState, useEffect } from "react";


export default function Dashboard() {
const [tasks, setTasks] = useState(() => {
  const stored = localStorage.getItem("tasks");
  return stored ? JSON.parse(stored) : initialTasks;
});

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) return;

    const sourceColumn = Array.from(tasks[source.droppableId]);
    const destColumn = Array.from(tasks[destination.droppableId]);

    const [movedItem] = sourceColumn.splice(source.index, 1);
    destColumn.splice(destination.index, 0, movedItem);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceColumn,
      [destination.droppableId]: destColumn,
    });
  };

  const handleAddTask = (title, column) => {
  const newTask = {
    id: "t" + Date.now(),
    title,
  };

  setTasks({
    ...tasks,
    [column]: [...tasks[column], newTask],
  });
};

  return (
  <>
    <div className="mt-6 p-6">
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex gap-6 justify-center">
          <TaskColumn columnId="todo" title="To Do" tasks={tasks.todo} />
          <TaskColumn columnId="inProgress" title="In Progress" tasks={tasks.inProgress} />
          <TaskColumn columnId="done" title="Done" tasks={tasks.done} />
        </div>
      </DragDropContext>
    </div>

    {/* Modal Component */}
    <AddTaskModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onAdd={handleAddTask}
    />

    {/* Floating Add Button */}
    <button
      onClick={() => setIsModalOpen(true)}
      className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700"
    >
      <FaPlus size={22} />
    </button>
  </>
);

}

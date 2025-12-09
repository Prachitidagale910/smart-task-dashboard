import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";

export default function TaskColumn({ columnId, title, tasks }) {
  return (
    <div className="bg-gray-100 p-4 rounded-xl w-80 min-h-[400px]">
      <h2 className="font-semibold text-lg mb-3">{title}</h2>

      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            className="space-y-2"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

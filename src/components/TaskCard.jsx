import React from "react";
import { Draggable } from "@hello-pangea/dnd";

export default function TaskCard({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="bg-white p-3 rounded-xl shadow-sm border mb-2 hover:shadow-md transition"
        >
          <p className="font-medium">{task.title}</p>
        </div>
      )}
    </Draggable>
  );
}

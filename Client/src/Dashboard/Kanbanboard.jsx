// Kanbanboard.js
import React from "react";
import TaskCard from "./TaskCard"; // Make sure to adjust the import path as needed

export default function Kanbanboard() {
  return (
    <div className="snap-mandatory snap-x mt-3 ml-10 flex flex-grow h-full overflow-x-auto hide-scrollbar rounded-3xl">
      <div className="flex p-4 w-max">
        <div className="bg-gray-100 p-4 rounded-md shadow-md overflow-x-auto">
          <h3 className="text-xl font-bold mb-4">ToDo</h3>
          <TaskCard />
          <TaskCard />

          {/* Add tasks here */}
        </div>
        <div className="bg-gray-100 p-4 rounded-md shadow-md overflow-x-auto">
          <h3 className="text-xl font-bold mb-4">InProgress</h3>
          <TaskCard />
          <TaskCard />
          {/* Add tasks here */}
        </div>
        <div className="bg-gray-100 p-4 rounded-md shadow-md overflow-x-auto">
          <h3 className="text-xl font-bold mb-4">Done</h3>
          <TaskCard /> <TaskCard />
          {/* Add tasks here */}
        </div>
        <div className="bg-gray-100 p-4 rounded-md shadow-md overflow-x-auto">
          <h3 className="text-xl font-bold mb-4">Backlog</h3>
          <TaskCard /> <TaskCard /> {/* Add tasks here */}
        </div>
      </div>
    </div>
  );
}

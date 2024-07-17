// Kanbanboard.js
import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import axios from "axios";
// Make sure to adjust the import path as needed

export default function Kanbanboard() {
  const [tasks, setTasks] = useState([]);
  let key1 = "";

  useEffect(() => {
    axios
      .get("http://localhost:3001/getAll")
      .then((result) => setTasks(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="snap-mandatory snap-x ml-10 flex flex-grow h-full overflow-x-auto hide-scrollbar rounded-3xl">
      <div className="flex pl-6 w-max">
        <div className="bg-gray-100 p-2 rounded-md shadow-md overflow-x-auto">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold">ToDo</h3>
            <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
              <i className="fa-solid fa-plus text-xl"></i>
            </div>
          </div>
          {tasks
            .filter((task) => task.status === "todo")

            .map(
              (task) => (
                console.log("New task getter: " + task._id),
                (key1 = task._id),
                console.log("New task getter key: " + key1),
                (
                  <TaskCard
                    key={key1}
                    title={task.title}
                    description={task.description}
                    user={task.user}
                    priority={task.priority}
                    statuss={task.statsdfuss}
                  />
                )
              )
            )}
        </div>
        <div className="bg-gray-100 p-2 rounded-md shadow-md overflow-x-auto">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold">InProgress</h3>
            <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
              <i className="fa-solid fa-plus text-xl"></i>
            </div>
          </div>
          {tasks
            .filter((task) => task.status === "inProgress")
            .map((task) => (
              <TaskCard
                key={task._id}
                title={task.title}
                description={task.description}
                user={task.user}
                priority={task.priority}
                status={task.status}
              />
            ))}
        </div>
        <div className="bg-gray-100 p-2 rounded-md shadow-md overflow-x-auto">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold">Done</h3>
            <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
              <i className="fa-solid fa-plus text-xl"></i>
            </div>
          </div>

          {tasks
            .filter((task) => task.status === "done")
            .map((task) => (
              <TaskCard
                key={task._id}
                title={task.title}
                description={task.description}
                user={task.user}
                priority={task.priority}
                status={task.status}
              />
            ))}
        </div>
        <div className="bg-gray-100 p-2 rounded-md shadow-md overflow-x-auto">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold">BackLog</h3>
            <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
              <i className="fa-solid fa-plus text-xl"></i>
            </div>
          </div>

          {tasks
            .filter((task) => task.status === "backlog")
            .map((task) => (
              <TaskCard
                key={task._id}
                title={task.title}
                description={task.description}
                user={task.user}
                priority={task.priority}
                status={task.status}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

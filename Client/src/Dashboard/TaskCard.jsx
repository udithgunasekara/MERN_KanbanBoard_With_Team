import React from "react";
import { useNavigate } from "react-router-dom";

export default function TaskCard({
  id,
  title,
  description,
  user,
  priority,
  status,
  onDelete,
}) {
  const navigate = useNavigate();

  // Function to determine the priority color
  const priorityColor = (priority) => {
    switch (priority) {
      case "P1":
        return "bg-red-500";
      case "P2":
        return "bg-blue-500";
      case "P3":
        return "bg-yellow-500";
      case "P4":
        return "bg-gray-500";
      default:
        return "bg-gray-300";
    }
  };

  const priColor = priorityColor(priority);

  // Function to navigate to the update task page
  const updateFunction = () => {
    navigate(`/addTask/${id}`);
  };

  return (
    <div className="max-w-sm bg-white rounded-3xl shadow-md overflow-hidden sm:max-w-sm mb-3">
      <div className="p-1 px-4">
        <div className="pt-3 grid grid-cols-5">
          <span
            className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${priColor}`}>
            {priority}
          </span>
          <i
            className="fa-solid fa-pen col-end-7 mt-1 cursor-pointer"
            onClick={updateFunction}></i>
        </div>
        <div className="mt-2">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="mt-2 text-gray-600">{description}</p>
          <span className="grid grid-cols-10">
            <div className="col-span-3">
              <div className="flex -space-x-1 overflow-hidden">
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://via.placeholder.com/24"
                  alt=""
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://via.placeholder.com/24"
                  alt=""
                />
                <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://via.placeholder.com/24"
                  alt=""
                />
              </div>
            </div>
            <div className="text-sm text-gray-500 col-start-4 col-span-3">
              8 comments
            </div>
            <div className="col-end-11 col-span-1">
              <div className="flex -space-x-1 overflow-hidden">{user}</div>
            </div>
          </span>
          <div className="grid grid-cols-5 pt-3">
            <p className="mt-2 text-sm text-gray-500 col-span-2">
              9th June, 2022
            </p>
            <i
              className="fa-solid fa-trash col-end-7 pt-2 text-red-700 cursor-pointer"
              onClick={() => onDelete(id)}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

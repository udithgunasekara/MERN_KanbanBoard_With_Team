import axios from "axios";
import React, { useState } from "react";

export default function TaskCard({
  id,
  title,
  description,
  user,
  priority,
  status,
  onDelete,
  handleUpdate,
}) {
  const priVal = priority;

  const priorityColor = (priority) => {
    switch (priVal) {
      case "P1":
        return "bg-red-500";
      case "P2":
        return "bg-blue-500";
      case "P3":
        return "bg-yellow-500";
      case "P4":
        return "bg-gray-500";
    }
  };

  const priColor = priorityColor(priority);

  return (
    <div className="max-w-sm bg-white rounded-3xl shadow-md overflow-hidden sm:max-w-sm mb-3">
      <div className="p-1 px-4">
        <div className="pt-3 grid grid-cols-5">
          <span
            className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${priColor}`}>
            {/* TODO adding priority */}
            {priority}
          </span>
          <i
            class="fa-solid fa-pen col-end-7 mt-1"
            onClick={() => handleUpdate(id)}></i>
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
              <div className="flex -space-x-1 overflow-hidden">
                {/* <img
                  className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  src="https://via.placeholder.com/24"
                  alt=""
                /> */}
                {user}
              </div>
            </div>
          </span>

          <div className="grid grid-cols-5 pt-3">
            <p className="mt-2 text-sm text-gray-500 col-span-2">
              9th June, 2022
            </p>
            <i
              className="fa-solid fa-trash col-end-7 pt-2 text-red-700"
              onClick={() => onDelete(id)}></i>
          </div>
        </div>
      </div>
    </div>
  );
}

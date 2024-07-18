import React from "react";

export default function Sidebar() {
  return (
    <div className="w-20 h-screen bg-white rounded-r-lg shadow-md flex flex-col items-center py-4 space-y-6 flex-shrink-0 fixed">
      <div className="text-2xl font-bold">PP</div>
      <div className="flex flex-col space-y-8 py-4">
        <div className="w-10 h-10 flex items-center justify-center bg-blue-200 rounded-full hover:bg-gray-300">
          <i class="fa-solid fa-house-chimney text-xl text-blue-600"></i>
        </div>
        <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
          <i class="fa-solid fa-calendar-days text-xl text-blue-600"></i>
        </div>
        <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
          <i class="fa-solid fa-phone text-xl text-blue-600"></i>
        </div>
        <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
          <i class="fa-solid fa-gear text-xl text-blue-600"></i>
        </div>
        {/* ... other navigation links */}
      </div>
      <div className="mt-auto mb-4">
        <a href="#" className="">
          <i class="fa-solid fa-arrow-right-from-bracket text-xl"></i>
        </a>
      </div>
    </div>
  );
}

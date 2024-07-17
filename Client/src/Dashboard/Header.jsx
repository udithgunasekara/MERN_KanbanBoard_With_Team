import React from "react";

export default function Header() {
  return (
    <div className="flex pl-4 fixed top-0 w-full bg-white z-10 ml-20 grid grid-cols-10 px-5 py-3">
      <h1 className="col-span-4">Kanban Board For Teams</h1>

      <div className="col-start-5 col-span-2">
        <input
          type="text"
          placeholder="Search for anything"
          className="w-96 px-3 py-2 border bg-gray-300 border-black rounded-2xl placeholder-black"
        />
      </div>
      <div className="col-end-11">
        <a
          href="#"
          className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
          <i className="fa-solid fa-user text-xl"></i>
        </a>
      </div>
    </div>
  );
}

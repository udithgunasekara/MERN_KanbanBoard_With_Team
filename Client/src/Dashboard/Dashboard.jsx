// Dashboard.js
import React from "react";
import Header from "./Header";
import Kanbanboard from "./Kanbanboard";
import Sidebar from "./SideBar";

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-x-auto">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex-grow overflow-x-auto overflow-hidden  p-4">
          <Kanbanboard />
        </div>
      </div>
    </div>
  );
}

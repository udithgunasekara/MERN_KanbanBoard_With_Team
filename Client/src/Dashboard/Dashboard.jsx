// Dashboard.js
import React from "react";
import Header from "./Header"; // Adjust the import path as needed
import Kanbanboard from "./Kanbanboard"; // Adjust the import path as needed
import Sidebar from "./SideBar"; // Ensure the import path is correct

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

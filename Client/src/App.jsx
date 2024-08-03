import { useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateUsers from "./CreateUsers";
import Testpass from "./Def/testpass";
import TaskAdd from "./TaskAdd/TaskAdd";
import Dashboard from "./Dashboard/Dashboard";
import Kanbanboard from "./Dashboard/Kanbanboard";
import TaskCard from "./Dashboard/TaskCard";
import SideBar from "./Dashboard/SideBar";
import Header from "./Dashboard/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dump" element={<CreateUsers />}></Route>
          <Route path="pass" element={<Testpass />}></Route>

          <Route path="addTask/:id" element={<TaskAdd />}></Route>
          <Route path="/" element={<Dashboard />}></Route>

          {/* for testing purpose */}
          <Route path="kanban" element={<Kanbanboard />}></Route>
          <Route path="card" element={<TaskCard />}></Route>
          <Route path="side" element={<SideBar />}></Route>
          <Route path="header" element={<Header />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

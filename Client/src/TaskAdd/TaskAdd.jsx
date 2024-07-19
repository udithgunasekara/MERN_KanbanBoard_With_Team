import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function TaskAdd() {
  const { id } = useParams("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");
  const [priority, setPriority] = useState("P1");
  const [status, setStatus] = useState("todo");
  const navigate = useNavigate();

  const Submit = (e) => {
    if (id === "null") {
      console.log("here creating" + priority, status, user);
      e.preventDefault();
      axios
        .post("http://localhost:3001/createTask", {
          title,
          description,
          user,
          priority,
          status,
        })
        .then((result) => console.log(result), navigate("/dashboard"))
        .catch((err) => console.log(err));
    } else {
      e.preventDefault();
      console.log("here dta on update" + priority, status, user);
      console.log("Here updating");
      axios
        .put("http://localhost:3001/updateTask/" + id, {
          title,
          description,
          user,
          priority,
          status,
        })
        .then((result) => console.log(result), navigate("/dashboard"))
        .catch((err) => console.log(err));
    }
  };

  if (id !== "null") {
    useEffect(() => {
      if (id) {
        axios
          .get(`http://localhost:3001/getById/${id}`)
          .then((response) => {
            const task = response.data;
            setTitle(task.title);
            setDescription(task.description);
            setUser(task.user);
            setPriority(task.priority);
            setStatus(task.status);
          })
          .catch((error) => console.log(error));
      }
    }, [id]);
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 ">
      <div className="p-6  max-w-1xl max-h-2xl bg-white rounded-2xl shadow-lg">
        <form onSubmit={Submit} className="space-y-6 ">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title:
            </label>
            <input
              value={title}
              type="text"
              id="title"
              name="title"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={description}
              onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                User:
              </label>
              <input
                value={user}
                type="text"
                id="user"
                name="user"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setUser(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Priority:
              </label>
              <select
                value={priority}
                id="priority"
                name="priority"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setPriority(e.target.value)}>
                <option value="P1">Priority 1</option>
                <option value="P2">Priority 2</option>
                <option value="P3">Priority 3</option>
                <option value="P4">Priority 4</option>
              </select>
            </div>
            {console.log("you are setting: " + priority)}

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Status:
              </label>
              <select
                value={status}
                id="status"
                name="status"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                onChange={(e) => setStatus(e.target.value)}>
                <option value="todo">Todo</option>
                <option value="inProgress">InProgress</option>
                <option value="done">Done</option>
                <option value="backlog">Backlog</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

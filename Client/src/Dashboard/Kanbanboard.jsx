import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  DndContext,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TaskCard from "./TaskCard";

export default function Kanbanboard() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getAll")
      .then((result) => setTasks(result.data))
      .catch((err) => console.log(err));
  }, []);

  const deleteTask = (id) => {
    // Function to delete a task
    axios
      .delete("http://localhost:3001/deleteTask/" + id)
      .then((result) => {
        console.log(result.data);
        setTasks(tasks.filter((task) => task._id !== id));
      })
      .catch((err) => console.log(err));
  };

  const moveOn = () => {
    // Navigate to add task page
    navigate("/addTask/" + null);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setTasks((items) => {
        const oldIndex = items.findIndex((task) => task._id === active.id);
        const newIndex = items.findIndex((task) => task._id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  // Define sensors for drag-and-drop
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Define the columns for the Kanban board
  const columns = [
    { title: "ToDo", status: "todo" },
    { title: "InProgress", status: "inProgress" },
    { title: "Done", status: "done" },
    { title: "BackLog", status: "backlog" },
  ];

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}>
      <div className="snap-mandatory snap-x ml-10 mt-20 flex flex-grow h-full overflow-x-auto hide-scrollbar rounded-3xl custom-scrollbar">
        <div className="flex pl-6 w-max">
          {columns.map((column) => (
            <div
              key={column.status}
              className="bg-gray-100 p-2 rounded-md shadow-md overflow-x-auto mr-4 custom-scrollbar">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">{column.title}</h3>
                <div className="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300">
                  <i className="fa-solid fa-plus text-xl" onClick={moveOn}></i>
                </div>
              </div>
              <SortableContext
                items={tasks.filter((task) => task.status === column.status)}
                strategy={verticalListSortingStrategy}>
                {tasks
                  .filter((task) => task.status === column.status)
                  .map((task) => (
                    <SortableItem
                      key={task._id}
                      id={task._id}
                      task={task}
                      onDelete={deleteTask}
                    />
                  ))}
              </SortableContext>
            </div>
          ))}
        </div>
      </div>
    </DndContext>
  );
}

function SortableItem({ id, task, onDelete }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <TaskCard
        id={task._id}
        title={task.title}
        description={task.description}
        user={task.user}
        priority={task.priority}
        status={task.status}
        onDelete={onDelete}
      />
    </div>
  );
}

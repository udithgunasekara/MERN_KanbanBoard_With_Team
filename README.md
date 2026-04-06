# Kanban Board Project

A full-stack Kanban board application designed to streamline task management. This project demonstrates proficiency in building robust RESTful APIs with Node.js and integrating them seamlessly with a modern React frontend.

## Key Features
* **RESTful API Architecture:** Designed and implemented a scalable backend using Node.js and Express to handle task creation, retrieval, updates, and deletion (CRUD).
* **Database Integration:** Utilized MongoDB (via Mongoose) for persistent data storage, defining clear schemas for task management.
* **Interactive Kanban Board:** Built a responsive frontend where tasks can be organized by status (ToDo, InProgress, Done, BackLog) using drag-and-drop functionality.
* **Cross-Origin Resource Sharing (CORS):** Configured Express to handle CORS securely, enabling the distinct client and server applications to communicate effectively.

## Tech Stack
### Backend (Focus: Node.js)
* **Node.js & Express.js:** Serves as the core backend framework, routing API requests, processing business logic, and handling database interactions efficiently.
* **MongoDB & Mongoose:** NoSQL database used to flexibly store task data, with Mongoose providing structured schema validation.
* **Nodemon:** Development utility to automatically restart the Node.js application when file changes are detected.

### Frontend
* **React.js (with Vite):** Fast and modern component-based UI framework.
* **Tailwind CSS & Bootstrap:** Used for responsive styling and layout design.
* **@dnd-kit:** A lightweight React library powering the drag-and-drop mechanics across Kanban columns.
* **Axios:** Promise-based HTTP client handling asynchronous requests to the Node.js backend.

# TODO App

Simple full-stack to-do application built with React on the frontend and Express, Mongoose, and MongoDB on the backend.

## Features

- Add new tasks.
- View all tasks.
- Filter tasks by all, pending, and completed.
- Mark tasks as completed or pending.
- Edit existing task titles.
- Delete tasks.

## Project Structure

```text
TODO-App/
├── backend/
│   ├── .env
│   ├── .gitignore
│   ├── models/
│   │   └── Task.js
│   ├── routes/
│   │   └── tasks.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.js
│   │   └── components/
│   │       ├── TaskForm.jsx
│   │       ├── TaskItem.jsx
│   │       └── TaskList.jsx
│   ├── package.json
│   └── README.md
└── README.md
```

## Backend

The backend is an Express server connected to MongoDB through Mongoose.

### Main files

- `server.js` starts the API server and connects to MongoDB.
- `routes/tasks.js` contains the REST API routes for tasks.
- `models/Task.js` defines the task schema.

### Task schema

Each task has:

- `title` - required string
- `completed` - boolean, defaults to `false`
- timestamps - `createdAt` and `updatedAt`

### API Endpoints

- `GET /api/tasks` - get all tasks
- `POST /api/tasks` - create a task
- `PUT /api/tasks/:id` - update a task title
- `PATCH /api/tasks/:id` - toggle completion state
- `DELETE /api/tasks/:id` - delete a task

## Frontend

The frontend is a React app that talks to the backend at `http://localhost:5000/api/tasks`.

### Main files

- `App.jsx` handles fetching, filtering, and task actions.
- `components/TaskForm.jsx` manages task input and submission.
- `components/TaskList.jsx` renders the list of tasks.
- `components/TaskItem.jsx` handles edit, delete, and completion toggling for one task.

## Setup

### 1. Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder with your MongoDB connection string:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend:

```bash
npm start
```

For development with auto-reload:

```bash
npm run dev
```

### 2. Frontend

```bash
cd frontend
npm install
```

Start the frontend:

```bash
npm start
```

## Usage

1. Start the backend server.
2. Start the frontend app.
3. Open the frontend in your browser.
4. Add, edit, complete, filter, and delete tasks.

## Notes

- The frontend currently expects the backend to run on `http://localhost:5000`.
- If you change the backend port, update the API URL in `frontend/src/App.jsx`.
- The backend uses CORS so the frontend can call the API from a different port.
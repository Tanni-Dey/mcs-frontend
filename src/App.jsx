import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import TodoAdd from "./pages/Dashboard/TodoAdd/TodoAdd";
import TodoList from "./pages/Dashboard/TodoList/TodoList";
import EditTodo from "./pages/Dashboard/EditTodo/EditTodo";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        {
          path: "addtodo",
          element: <TodoAdd />,
        },
        {
          path: "edittodo/:id",
          element: <EditTodo />,
        },
        {
          index: true,
          element: <TodoList />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

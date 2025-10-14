import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>d</div>
  },
  {
    path: '/login',
    element: <Login/>
  }
])
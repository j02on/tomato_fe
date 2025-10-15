import { createBrowserRouter } from "react-router-dom";
import { Blog, Login } from "./pages";
import { RootLayout } from "./layouts";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        path: '/',
        element: <Blog/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  }
])
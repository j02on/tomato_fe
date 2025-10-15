import { createBrowserRouter } from "react-router-dom";
import { Blog, Login, PdfPage } from "./pages";
import { RootLayout } from "./layouts";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        path: '/',
        element: <Blog/>
      },
      {
        path: '/pdf',
        element: <PdfPage/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  }
])
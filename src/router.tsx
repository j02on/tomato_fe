import { createBrowserRouter } from "react-router-dom";
import { Blog, BlogCreate, BlogDetail, BlogEdit, Login, PdfPage } from "./pages";
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
      },
      {
        path: '/blog/:id',
        element: <BlogDetail/>
      },
      {
        path: '/blog-write',
        element: <BlogCreate/>
      },
      {
        path: '/blog-edit/:id',
        element: <BlogEdit/>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  }
])
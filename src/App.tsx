import { RouterProvider } from "react-router-dom"
import { router } from "./router"

export const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
 

const router = createBrowserRouter([
  {
    path:'/',
    element:<><Navbar /><HomePage /></>
  }
]);

function App() {

  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App

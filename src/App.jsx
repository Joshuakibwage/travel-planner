import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Activities from "./pages/Activities";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Places from "./pages/Places";
import ErrorPage from "./pages/ErrorPage";
 

const router = createBrowserRouter([
  {
    path:'/',
    element:<><Navbar /><HomePage /></>
  },
  {
    path:'/activities',
    element:<><Navbar /><Activities /></>
  },
  {
    path:'/places',
    element:<><Navbar /><Places /></>
  },
  {
    path:'/about',
    element:<><Navbar /><About /></>
  },
  {
    path:'/contact',
    element:<><Navbar /><ContactUs /></>
  },
  {
    path:'*',
    element:<><ErrorPage /></>,
    errorElement:<><ErrorPage /></>
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

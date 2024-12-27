import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Activities from "./pages/Activities";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Places from "./pages/Places";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
 

const router = createBrowserRouter([
  {
    path:'/',
    element:<><Navbar /><HomePage /><Footer /></>
  },
  {
    path:'/activities',
    element:<><Navbar /><Activities /><Footer /></>
  },
  {
    path:'/places',
    element:<><Navbar /><Places /><Footer /></>
  },
  {
    path:'/about',
    element:<><Navbar /><About /><Footer /></>
  },
  {
    path:'/contact',
    element:<><Navbar /><ContactUs /><Footer /></>
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

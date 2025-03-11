import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from './pages/Navbar'

import Home from './pages/Home'
import Contact from './pages/Contacts'
import Dashboard from './pages/Dashboards'
import ReactRoutes from './pages/ReactRoutes'
import NotFound from "./pages/NotFound";
import { Outlet } from "react-router-dom";
import DashboardOne from "./pages/Dashboard_one";
import DashboardTwo from "./pages/Dashboard_two";
import UserId from "./pages/UserId";



const Layout = ({children})=>(

  <>
  <NavBar/>
  <Outlet /> 
  {children}
  </>

);

let router = createBrowserRouter([
  {
    path:"/",
    element: <Layout><Home/></Layout>


  },
  {
    path: "/dashboard",
    element: <Layout><Dashboard/></Layout>,
    children:[
      {
        path: "dashboard1",
        element: <DashboardOne/>
      },
      {
        path: "dashboard2",
        element: <DashboardTwo/>
      }

    ]

  },
  {
    path: "/contacts",
    element: <Layout><Contact/></Layout>
  },
  {
    path: "/react-router",
    element: <Layout><ReactRoutes/></Layout>
  },
  {
    path:"/user/:id",
    element: <Layout><UserId/></Layout>

  },
  {
    path: "*",
    element: <Layout><NotFound/></Layout>
  }

])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

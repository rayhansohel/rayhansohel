import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProjectDetails from "../pages/projectDetails";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";

const Routes = createBrowserRouter([

  //Main route
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/skills",
        element: <Skills/>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails />,
      },
    ],
  },
]);

export default Routes;
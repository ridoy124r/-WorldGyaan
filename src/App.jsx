import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Country from "./pages/Country";
import AppLayout from "./components/Layout/AppLayout";
import Error from "./pages/Error";
import Login from "./pages/Login";
import Regester from "./pages/Regester";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement:<Error />,
      children: [
        {
          index: true,       
          element: <Home />,
        },
        {
          path: "about",     
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "country",
          element: <Country />,
        },
        {
         path:"login",
         element:<Login />

        },
        {
         path:"register",
         element:<Regester />

        }

      ],
    },
    
  ]);

  return <RouterProvider router={router} />;
};

export default App;

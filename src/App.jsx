import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import  Home  from './components/Home';
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/Layout';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
function App() {

  

const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
    children: [
      {
      path: "",
      element: <Home />
    },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
  ],
    },

  ]);
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App

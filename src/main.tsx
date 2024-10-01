import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./components/Navbar.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./routes/About.tsx";
import Services from "./routes/Services.tsx";
import Schemes from "./routes/Schemes.tsx";
import Login from "./routes/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/schemes",
    element: <Schemes />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import Login from "./components/login"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>
  },
  {
    path:"/login",
    element:<Login/>
  }
])

const App = () => {
return <RouterProvider router={routes}/>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);


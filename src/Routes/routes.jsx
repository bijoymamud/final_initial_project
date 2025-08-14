import { createBrowserRouter, RouterProvider } from "react-router";

import Main from "../Layout/Main";
import React from "react";
const Home = React.lazy(() => import("../Pages/Home/Home"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

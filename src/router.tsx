import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import { Home, Pin } from "./screens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/pin",
        element: <Pin/>,
      }
    ]
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import { Home, Pin, Model } from "./screens";

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
      },
      {
        path : "/:model",
        element: <Model/>
      }
    ]
  },
]);

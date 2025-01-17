import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import { Home } from "./screens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        index: true,
        element: <Home/>,
      },
    ]
  },
]);

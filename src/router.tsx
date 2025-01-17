import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import { Main } from "./screens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        index: true,
        element: <Main/>,
      },
    ]
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        index: true,
        // element: <LandingPage />,
      },
    ]
  },
]);

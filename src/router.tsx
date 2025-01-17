import { createBrowserRouter } from "react-router-dom";
// import Layout from "./layouts/layout";
import NotFound from "@/features/not-found/NotFound";
import { LandingPage } from "./features/landing-page";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />,
    children:[
      {
        index: true,
        element: <LandingPage />,
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

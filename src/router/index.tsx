import App from "@/pages/App";
import { createBrowserRouter } from "react-router-dom";
import AdminRoutes from "./admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    children: AdminRoutes,
  },
]);

export default router;

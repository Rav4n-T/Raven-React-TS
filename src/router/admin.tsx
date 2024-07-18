import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const AdminLogin = lazy(() => import("@/pages/admin/Login"));

const AdminRoutes: RouteObject[] = [
  {
    path: "login",
    element: <AdminLogin />,
  },
];

export default AdminRoutes;

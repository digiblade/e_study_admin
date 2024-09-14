import React from "react";
import Side_drawer from "./organism/side_drawer";
import Dashboard_admin from "./pages/dashboard_admin";
import Course_page from "./pages/course_page";
import Authentication_page from "./pages/authentication_page";
import LoginPage from "./pages/login_page";
import ProtectedRoute from "./protected_routes";
import { AuthProvider } from "./custom_hooks/useAuth";

const { createBrowserRouter, RouterProvider } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        {" "}
        <Side_drawer label={"dashboard admin"}>
          <Dashboard_admin></Dashboard_admin>
        </Side_drawer>
      </ProtectedRoute>
    ),
  },
  {
    path: "/alt",
    element: (
        <Side_drawer label={"dashboard admin"}>
          <Dashboard_admin></Dashboard_admin>
        </Side_drawer>
    ),
  },
  {
    path: "/dashboard-admin",
    element: (
      <Side_drawer label={"dashboard admin"}>
        <Dashboard_admin></Dashboard_admin>
      </Side_drawer>
    ),
  },
  {
    path: "/dashboard-teacher",
    element: (
      <Side_drawer label={"dashboard teacher"}>
        <Dashboard_admin></Dashboard_admin>
      </Side_drawer>
    ),
  },
  {
    path: "/course",
    element: (
      <Side_drawer label={"course"}>
        <Course_page />
      </Side_drawer>
    ),
  },
  {
    path: "/authentication",
    element: (
      <Side_drawer label={"authentication"}>
        <Authentication_page />
      </Side_drawer>
    ),
  },
  {
    path: "/settings",
    element: (
      <Side_drawer label={"settings"}>
        <h1>Hello world!</h1>
      </Side_drawer>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/error",
    element: (
      <Side_drawer label={"error"}>
        <h1>Hello world!</h1>
      </Side_drawer>
    ),
  },
]);

function PageRouter() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default PageRouter;

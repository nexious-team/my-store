import { Home, Service, Login, Register } from "./pages";

export default [
  {
    exact: true,
    path: "/",
    component: Home
  },
  {
    exact: true,
    path: "/service",
    component: Service
  },
  {
    exact: true,
    path: "/login",
    component: Login
  },
  {
    exact: true,
    path: "/register",
    component: Register
  }
];

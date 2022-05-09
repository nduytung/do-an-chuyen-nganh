import React from "react";
import { BASE_URL } from "./baseURL";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import About from "../pages/About";
import Login from "../pages/Login";

type RouteListType = {
  path: any;
  element: any;
};

export const routeList: RouteListType[] = [
  /* {
    path: BASE_URL.LANDING,
    element: <Landing />,
  }, */
  {
    path: BASE_URL.PROFILE,
    element: <Profile />,
  },
  /* {
    path: BASE_URL.DETAIL_PROJECT,
    element: <Detail />,
  }, */
  {
      path: BASE_URL.REGISTER,
      element: <Register />
  },
  {
    path: BASE_URL.ABOUT,
    element: <About />
  },
  {
    path: BASE_URL.LOGIN,
    element: <Login />
  },
];
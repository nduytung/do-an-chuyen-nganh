import React from "react";
import { BASE_URL } from "./baseURL";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

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
  }
];
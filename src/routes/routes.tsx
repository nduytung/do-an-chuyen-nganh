import React from "react";
import { BASE_URL } from "./baseUrl";
import Profile from "../pages/Profile";
import Landing from "../pages/Landing";
import Detail from "../pages/project/Detail";

type RouteListType = {
  path: any;
  element: any;
};

export const routeList: RouteListType[] = [
  {
    path: BASE_URL.LANDING,
    element: <Landing />,
  },
  {
    path: BASE_URL.PROFILE,
    element: <Profile />,
  },
  {
    path: BASE_URL.DETAIL_PROJECT,
    element: <Detail />,
  },
];

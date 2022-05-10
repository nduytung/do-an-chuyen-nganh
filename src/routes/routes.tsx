import React, { lazy } from "react";
import { BASE_URL } from "./baseURL";
import Register from "../pages/Register";
import About from "../pages/About";
const Profile = lazy(() => import("../pages/Profile"));
const Landing = lazy(() => import("../pages/Landing"));
const Detail = lazy(() => import("../pages/project/Detail"));
const NewProject = lazy(() => import("../pages/project/NewProject"));

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
  {
    path: BASE_URL.NEW_PROJECT,
    element: <NewProject />,
  },
  {
    path: BASE_URL.REGISTER,
    element: <Register />,
  },
  {
    path: BASE_URL.ABOUT,
    element: <About />,
  },
];

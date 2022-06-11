import React, { lazy } from "react";
import { BASE_URL } from "./baseURL";
import Register from "../pages/Register";
import About from "../pages/About";
import Login from "../pages/Login";
import Bookmark from "../pages/Bookmark";
import AllProject from "../pages/AllProject";
import Dashboard from "../pages/Dashboard";
import DonePayment from "../pages/DonePayment";
import ClosedProjectList from "../pages/ClosedProjectList";
import UpdatePath from "../pages/project/UpdatePath";
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
    path: `${BASE_URL.PROFILE}/:id`,
    element: <Profile />,
  },
  {
    path: `${BASE_URL.DETAIL_PROJECT}/:id`,
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
  {
    path: BASE_URL.LOGIN,
    element: <Login />,
  },
  {
    path: BASE_URL.ALL_PROJECT,
    element: <AllProject />,
  },
  {
    path: BASE_URL.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: BASE_URL.BOOKMARK,
    element: <Bookmark />,
  },

  {
    path: BASE_URL.DONE_PAYMENT,
    element: <DonePayment />,
  },
  {
    path: BASE_URL.CLOSED_PROJECT,
    element: <ClosedProjectList />,
  },
  {
    path: `${BASE_URL.UPDATE_PATH}/:id`,
    element: <UpdatePath />,
  },
];

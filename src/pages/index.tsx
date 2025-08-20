import { RouteObject } from "react-router";
import { RoutePath } from "../types/route";

import HomePage from "../pages/Home";
import LandingPage from "../pages/Landing";
import { web3jsExtRoutes } from "../routers/web3jsExtRoutes";
import { ethersExtRoutes } from "../routers/ethersExtRoutes";
import { viemExtRoutes } from "../routers/viemExtRoutes";

const routes: RouteObject[] = [
  {
    path: RoutePath.Home,
    Component: HomePage,
    children: [
      { index: true, Component: LandingPage },
      ...web3jsExtRoutes,
      ...ethersExtRoutes,
      ...viemExtRoutes,
    ],
  },
];

export default routes;

import { ReactElement } from "react";
import { Outlet } from "react-router";

const Home = (): ReactElement => {
  return <Outlet />;
};

export default Home;

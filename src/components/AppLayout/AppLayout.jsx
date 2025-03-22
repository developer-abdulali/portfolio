import React from "react";
import Navbar from "../Navbar/Navbar";
import Themes from "../Themes/Themes";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Themes /> */}
    </div>
  );
};

export default AppLayout;

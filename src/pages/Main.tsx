import Header from "../components/common/Header";
import React from "react";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <div>Main</div>
      <Header />
      <Outlet />
    </div>
  );
}

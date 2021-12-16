import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Main from "../pages/Main";
import User from "../pages/User";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Main />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

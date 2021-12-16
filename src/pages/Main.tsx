import { Outlet } from "react-router-dom";

import Header from "../components/common/Header";

export default function Main() {
  return (
    <div>
      <div>Main</div>
      <Header />
      <Outlet />
    </div>
  );
}

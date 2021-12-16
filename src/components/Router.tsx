import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Dashboard, Login, Main, User } from "pages";

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

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Dashboard, Login, Main, User } from "pages";
import UserDetail from "./user/UserDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main/*" element={<Main />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user" element={<User />}>
            <Route path=":id" element={<UserDetail />} />
          </Route>
          <Route path="*" element={<div>소중이들 미안! 404 에러야!</div>} />
        </Route>
        <Route path="/*" element={<div>소중이들 미안! 404 에러야!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

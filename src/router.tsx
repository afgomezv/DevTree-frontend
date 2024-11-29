import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import AuthLayout from "./layout/AuthLayout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginView />} />
          <Route path="/auth/register" element={<RegisterView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

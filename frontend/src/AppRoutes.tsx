import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./auth/ProtectedRoutes";
import ProtectedAuth from "./auth/ProtectedAuth";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<ProtectedAuth />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route element={<ProtectedRoutes />}></Route>
    </Routes>
  );
}

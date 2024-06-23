import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/Auth";

export default function ProtectedLogin() {
  const { auth } = useAuth();
  return !auth.token ? <Outlet /> : <Navigate to="/" />;
}

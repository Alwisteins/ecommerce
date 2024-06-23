import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/Auth";

export default function ProtectedRoutes() {
  const { auth } = useAuth();
  return auth.token ? <Outlet /> : <Navigate to='/login' />
}

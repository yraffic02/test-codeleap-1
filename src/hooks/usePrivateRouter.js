import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom"

export function PrivateRoutes() {
  const username = useSelector((state) => state.username);

  return username ? <Outlet /> : <Navigate to="/" />
}
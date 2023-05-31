import { Outlet, Navigate } from "react-router-dom"
import { getItem } from "./useLocalStore"

export function PrivateRoutes() {
  const logged = getItem('isLogged')

  return logged ? <Outlet /> : <Navigate to="/" />
}
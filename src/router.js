import { Routes, Route, Navigate } from "react-router-dom"
import { Signin } from "./pages/signin"
import { Home } from "./pages/home"
import { PrivateRoutes } from "./hooks/usePrivateRouter"

export const MainRoutes = () =>{
    return(
        <Routes>
            <Route path="/signin" element={<Signin/>}/>

            <Route element={<PrivateRoutes />}>
                <Route path="/home" element={<Home />} />
            </Route>
            
            <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
    )
}

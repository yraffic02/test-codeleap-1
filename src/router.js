import { Routes, Route, Navigate } from "react-router-dom"
import { Signin } from "./pages/signin"
import { Home } from "./pages/home"

export const MainRoutes = () =>{
    return(
        <Routes>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/home" element={<Home />} />
            
            <Route path="/" element={<Navigate to="/signin" />} />
        </Routes>
    )
}

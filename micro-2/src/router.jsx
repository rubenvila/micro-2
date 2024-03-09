import {createBrowserRouter} from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/MainPage"

export const router = createBrowserRouter([
    {
        path: "*",
        element: <HomePage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/home",
        element: <HomePage/>
    },

])
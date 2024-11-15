import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import UserLogin from "../components/UserLogin";
import UserRegister from "../components/UserRegister";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '', 
                element: <Navigate to={'/category/01'}></Navigate>,
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews> ,
                loader: ({params}) =>
                fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
            },
        ],
    },
    {
        path: '/news',
        element: <h1>news</h1>
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <UserLogin></UserLogin>,
            },
            {
                path: '/auth/register',
                element:<UserRegister></UserRegister>
            }
        ]
    }
])

export default Router;
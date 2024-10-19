import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Base from "./base/base";
import HomePage from "../features/base/pages/home";
import { SearchPage } from "../features/base/pages/search";
import { ProfilePage } from "../features/base/pages/profile";
import { FollowPage } from "../features/base/pages/follow";
import { ReplyPage } from "../features/base/pages/reply";
import { AuthLayout } from "./auth/auth";

export function AppRouter() {
    const router = createBrowserRouter([
        {
            element: <AuthLayout />,
            children: [
                {
                    path: "/login",
                    element: <Loginpage />,
                },
                {
                    path: "/register",
                    element: <Registerpage />,
                },
                {
                    path: "/reset",
                    element: <Resetpage />,
                },
                {
                    path: "/forgot",
                    element: <Forgotpage />,
                },
            ]
        },
        {
            path: "/",
            element: <Base />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: 'search',
                    element: <SearchPage />,
                },
                {
                    path: 'profile',
                    element: <ProfilePage />,
                },
                {
                    path: 'follow',
                    element: <FollowPage />,
                },
                {
                    path: 'status',
                    element: <ReplyPage />,
                },
            ]
        },
    ]);
    return <RouterProvider router={router} />;
}
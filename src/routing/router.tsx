import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import UserPage from "./UserPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";

const router = createBrowserRouter([
    { 
        path: '/', 
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children: [
            // { path: '', element: <HomePage/>}, option 1 
            { index: true, element: <HomePage/>}, //option 2
            { path: '/login', element: <LoginPage/>},
            { 
                path: 'users', 
                element: <UserPage/>,
                children: [
                    { 
                        path: ':id', 
                        element: <UserDetailPage/>
                    },
                ]
            },
            { path: 'contact', element: <ContactPage/>}
        ]
    }
])

export default router;
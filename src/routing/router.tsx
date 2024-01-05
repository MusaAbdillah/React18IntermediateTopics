import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";

const router = createBrowserRouter([
    { 
        path: '/', 
        element: <Layout/>,
        children: [
            // { path: '', element: <HomePage/>}, option 1 
            { index: true, element: <HomePage/>}, //option 2
            { path: 'users', element: <UserListPage/>},
            { path: 'users/:id', element: <UserDetailPage/>},
            { path: 'contact', element: <ContactPage/>}
        ]
    }
])

export default router;
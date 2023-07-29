import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Details from "../Pages/Home/Projects/Details";
import Details2 from "../Pages/Home/Projects/Details2";
import Details3 from "../Pages/Home/Projects/Details3";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'blogs',
                element: <Blogs></Blogs>
            },
            {
                path: 'details',
                element: <Details></Details>
            },
            {
                path: 'details2',
                element: <Details2></Details2>
            },
            {
                path: 'details3',
                element: <Details3></Details3>
            }
        ]
    }
]);
export default router;
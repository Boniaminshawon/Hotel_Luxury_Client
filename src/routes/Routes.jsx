import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root> ,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element:<Root></Root>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            }
        ],
    },
]);
export default router;
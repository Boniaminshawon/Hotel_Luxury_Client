import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Error from "../pages/Error";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import Home from "../pages/Home";
import AllRoom from "../pages/AllRoom";
import MyBookings from "../pages/MyBookings";
import RoomsDetails from "../components/RoomsDetails";
import Modal from "../components/Modal";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/all-rooms',
                element: <AllRoom></AllRoom>
            },
            {
                path: '/all-rooms/:id',
                element: <RoomsDetails></RoomsDetails>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/all-rooms/${params.id}`)
            },
            {
                path: '/all-rooms/:id',
                element: <Modal></Modal> ,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/all-rooms/${params.id}`)
            },
            {
                path: '/my-bookings',
                element: <MyBookings></MyBookings>
            }
        ],
    },
]);
export default router;
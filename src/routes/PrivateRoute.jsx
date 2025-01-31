import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";


const PrivateRoute = ({children}) => {
    
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    if (!user) {
		return <Navigate to='/login' state={ { from: location } } replace></Navigate>
	}
	return children
};

export default PrivateRoute;
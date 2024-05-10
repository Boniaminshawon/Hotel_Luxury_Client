import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useAuth = () => {
    const allContext = useContext(AuthContext);
    return allContext;
};

export default useAuth;
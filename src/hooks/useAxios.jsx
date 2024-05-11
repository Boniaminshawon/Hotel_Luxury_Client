import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth';
const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

const useAxios = () => {
    const { logOut } = useAuth();
    const navigation = useNavigate();

    axiosSecure.interceptors.response.use(
        res => {
            return res
        },
        async error => {
            console.log('error tracked in the interceptor', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                await logOut()
                navigation('/login')
            }
            return Promise.reject(error)
        }
    )

    return axiosSecure


};

export default useAxios;
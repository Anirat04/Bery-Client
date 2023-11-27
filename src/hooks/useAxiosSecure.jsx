import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ProviderContext } from "../Provider/Provider";
import { useContext } from "react";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut, loading } = useContext(ProviderContext)
    // request interceptor to add authorization header for every secure call to the API 
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    })

    // intercepts 401 and 403  status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status
        // console.log('status error in the interceptors:', status)
        // for 401 or 403 logout the user and move the user to the login page
        if (loading) {
            return <div className='max-w-[200px] mx-auto mt-[200px]'><span className="loading loading-dots loading-lg"></span></div>
            // return <progress className="progress w-56"></progress>
        }
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error);
    })

    return axiosSecure
};

export default useAxiosSecure;
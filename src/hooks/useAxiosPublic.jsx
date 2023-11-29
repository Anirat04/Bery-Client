import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bery-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;
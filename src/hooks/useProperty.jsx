// import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useProperty = () => {
    // const [allProperties, setAllProperties] = useState([])
    const axiosSecure = useAxiosSecure()
    // ToDo: get loading state from provider
    // const [loading, setLoading] = useState(true)
    // useEffect(() => {
    //     fetch('http://localhost:5000/property')
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllProperties(data)
    //             // setLoading(false)
    //         })
    // }, [])
    const { refetch, data: allProperties = [] } = useQuery({
        queryKey: ['allProperties'],
        queryFn: async () => {
            const res = await axiosSecure.get('/property')
            return res.data
        }
    }) 
    // toDO: return loading here
    return [allProperties, refetch]
};

export default useProperty;


// const { user } = useContext(ProviderContext)
// const { refetch, data: wishData = [] } = useQuery({
//     queryKey: ['wishlist', user?.email],
//     queryFn: async () => {
//         const res = await axiosSecure.get(`/wishlist?email=${user?.email}`)
//         return res.data;
//     }
// })
// return [wishData, refetch]



// Navbar Color: #e9f1ff
// Main color: #0b2c3d
// Sub color: #b39359

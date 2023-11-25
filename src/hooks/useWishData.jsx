import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useWishData = () => {
    const axiosSecure = useAxiosSecure()
   const {data: wishData=[]} = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await axiosSecure.get('/wishlist')
            return res.data;
        }
   })
   return wishData
};

export default useWishData;
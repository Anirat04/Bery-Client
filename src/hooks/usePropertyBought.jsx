import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { ProviderContext } from "../Provider/Provider";

const usePropertyBought = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useContext(ProviderContext)
    const { refetch, data: propertyBought = [] } = useQuery({
        queryKey: ['propertyBought', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/property_bought?email=${user?.email}`)
            return res.data;
        }
    })
    return [propertyBought, refetch]
};

export default usePropertyBought;
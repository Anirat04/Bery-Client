import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { ProviderContext } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";

// ToDo: this component will be used as admin route protection
const AdminRoute = (children) => {
    const [user, loading] = useContext(ProviderContext)
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    if(loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default AdminRoute;
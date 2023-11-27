import { Outlet } from "react-router-dom";
import Dash_Nav from "./Dash_Nav/Dash_Nav";
import Navbar from "../layout/Shared/Navbar/Navbar";

const DashboardLayout = () => {
    return (
        <div className="">
            <div className="flex w-auto mx-auto">
                <Dash_Nav></Dash_Nav>
                <Outlet></Outlet>
                {/* <h1 className="bg-black">this is dashboard layout</h1> */}
            </div>
        </div>
    );
};

export default DashboardLayout;
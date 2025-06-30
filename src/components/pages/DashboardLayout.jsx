import React from "react";
// import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div style={{ display: "flex" }}>
            <div>
                <Sidebar />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;

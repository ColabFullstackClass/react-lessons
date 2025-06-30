import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <ul>
            <li>
                <Link to="/dashboard">
                    <h1>Dashboard</h1>
                </Link>
            </li>
            <li>
                <Link to="/dashboard/settings">
                    <h1>Settings</h1>
                </Link>
            </li>
            <li>
                <Link to="/dashboard/friends">
                    <h1>Friends</h1>
                </Link>
            </li>
            <li>
                <Link to="/dashboard/profile">
                    <h1>profile</h1>
                </Link>
            </li>
        </ul>
    );
};

export default Sidebar;

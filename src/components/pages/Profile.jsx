import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserData } from "../slices/userSlice";

const Profile = () => {
    const username = useSelector((state) => {
        console.log("STATE IS ------>>>", state);
        return state.user.username;
    });
    const dispatch = useDispatch();

    const updateData = () => {
        dispatch(
            addUserData({
                username: "newone",
                email: "123@gmail.com",
                bio: "I am here",
                isAdmin: true,
            })
        );
    };
    return (
        <div>
            <h1 style={{ fontSize: "70px" }}>PROFILE PAGE</h1>
            <h2>{username} from store </h2>
            <button onClick={updateData}></button>
        </div>
    );
};

export default Profile;

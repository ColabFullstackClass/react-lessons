import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: "Default User",
    email: "",
    bio: "",
    isAdmin: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUserData: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.bio = action.payload.bio;
            state.isAdmin = action.payload.isAdmin;
        },
    },
});

export const { addUserData } = userSlice.actions;
export default userSlice.reducer;

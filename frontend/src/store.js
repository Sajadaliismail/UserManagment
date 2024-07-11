import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/usersSlice";

const store = configureStore({
    reducer :{
        users:userSlice,
    }
})



export default store
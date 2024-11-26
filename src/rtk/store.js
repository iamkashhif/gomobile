import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/userSlice";
import { ordersReducer } from "./orders/ordersSlice";
import { profileInfoReducer } from "./auth/profileInfoSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    orders: ordersReducer,
    profile: profileInfoReducer,
  },
});

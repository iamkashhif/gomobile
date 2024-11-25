import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/userSlice";
import { ordersReducer } from "./orders/ordersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    orders: ordersReducer,
  },
});

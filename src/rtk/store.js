import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/userSlice";
import { ordersReducer } from "./orders/ordersSlice";
import { profileInfoReducer } from "./auth/profileInfoSlice";
import { supplierReducer } from "./supplier/supplierSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    orders: ordersReducer,
    suppliers: supplierReducer,
    profile: profileInfoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

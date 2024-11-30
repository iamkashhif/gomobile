import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders, getOrderById, updateOrderById } from "./ordersThunks";

// Async thunk to fetch users
const initialState = {
  ordersData: {},
  ordersLoading: false,
  updateOrderByIdLoading: false,

  orderData: {},
  orderloading: false,
  // postloading: false,
  // error: null,
  // userData: [],
  // userloading: false,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //get-user
      .addCase(fetchOrders.pending, (state) => {
        state.ordersLoading = true;
        state.error = null;
        state.ordersData = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.ordersData = action.payload;
        state.ordersLoading = false;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.ordersLoading = false;
        state.error = action.payload || "Failed to fetch users";
      })

      // getOrderById
      .addCase(getOrderById.pending, (state) => {
        state.orderloading = true;
        state.error = null;
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.orderData = action.payload;
        state.orderloading = false;
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.orderloading = false;
      })

      // updateOrderById
      .addCase(updateOrderById.pending, (state) => {
        state.updateOrderByIdLoading = true;
        state.error = null;
      })
      .addCase(updateOrderById.fulfilled, (state, action) => {
        state.updateOrderByIdLoading = false;
      })
      .addCase(updateOrderById.rejected, (state, action) => {
        state.updateOrderByIdLoading = false;
      });
  },
});

export const ordersReducer = ordersSlice.reducer;
export const { actions: ordersActions } = ordersSlice;

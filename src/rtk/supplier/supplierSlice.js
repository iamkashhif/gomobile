import { createSlice } from "@reduxjs/toolkit";
import {fetchSuppliers, getSupplierById } from "./supplierThunks";

// Async thunk to fetch users
const initialState = {
  supplierData: {},
  supplierLoading: false,
  supplierById: {},

};

const supplierSlice = createSlice({
  name: "suppliers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //get-user
      .addCase(fetchSuppliers.pending, (state) => {
        state.supplierLoading = true;
        state.error = null;
        state.supplierData = null;
      })
      .addCase(fetchSuppliers.fulfilled, (state, action) => {
        state.supplierData = action.payload;
        state.supplierLoading = false;
      })
      .addCase(fetchSuppliers.rejected, (state, action) => {
        state.supplierLoading = false;
        state.error = action.payload || "Failed to fetch users";
      })
      .addCase(getSupplierById.pending, (state) => {
        state.supplierLoading = true;
        state.error = null;
        state.supplierById = null;
      })
      .addCase(getSupplierById.fulfilled, (state, action) => {
        state.supplierById = action.payload;
        state.supplierLoading = false;
      })
      .addCase(getSupplierById.rejected, (state, action) => {
        state.supplierLoading = false;
        state.error = action.payload || "Failed to fetch users";
      })
  },
});

export const supplierReducer = supplierSlice.reducer;
export const { actions: ordersActions } = supplierSlice;

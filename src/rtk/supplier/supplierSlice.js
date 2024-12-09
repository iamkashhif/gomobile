import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSuppliers,
  getSupplierById,
  deleteSuppliers,
  createSuppliers,
  updateSuppliers,
} from "./supplierThunks";

// Async thunk to fetch users
const initialState = {
  supplierData: {},
  supplierLoading: false,
  supplierById: {},
  supplierByIdLoading: false, 
  updateAndCreateLoadings: false
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
        state.supplierByIdLoading = true;
        state.error = null;
        state.supplierById = null;
      })
      .addCase(getSupplierById.fulfilled, (state, action) => {
        state.supplierById = action.payload;
        state.supplierByIdLoading = false
        state.supplierLoading = false;
      })
      .addCase(getSupplierById.rejected, (state, action) => {
        state.supplierLoading = false;
        state.supplierByIdLoading = false
        state.error = action.payload || "Failed to fetch users";
      })
      .addCase(createSuppliers.pending, (state) => {
        state.updateAndCreateLoadings = true;
        // state.error = null;
        // state.supplierData = null;
      })
      .addCase(createSuppliers.fulfilled, (state) => {
        state.updateAndCreateLoadings = false;
      })
      .addCase(createSuppliers.rejected, (state, action) => {
        state.updateAndCreateLoadings = false;
        state.error = action.payload || "Failed to delete supplier";
      }).addCase(updateSuppliers.pending, (state) => {
        state.updateAndCreateLoadings = true;
        // state.error = null;
        // state.supplierData = null;
      })
      .addCase(updateSuppliers.fulfilled, (state) => {
        state.updateAndCreateLoadings = false;
      })
      .addCase(updateSuppliers.rejected, (state, action) => {
        state.updateAndCreateLoadings = false;
        state.error = action.payload || "Failed to delete supplier";
      });
  },
});

export const supplierReducer = supplierSlice.reducer;
export const { actions: ordersActions } = supplierSlice;

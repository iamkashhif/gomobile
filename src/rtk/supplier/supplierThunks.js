import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { get, post, put, _delete, patch } from "../../../utils/ApiServices";

export const fetchSuppliers = createAsyncThunk(
  "supplier/fetchSuppliers",
  async ({ search = "", page = 1, perPage = 10 }, thunkAPI) => {
    console.log("triggered 33333")
    try {
      const response = await get(
        `/supplier?search=${search}&pageNo=${page}&perPage=${perPage}`
      );
      console.log({response})
      if (
        response.data &&
        response.data.results 
        // &&
        // response.data.results
      ) {
        return response.data.results;
      } else {
        throw new Error("Invalid response structure");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
// create
export const createSuppliers = createAsyncThunk(
  "supplier/createSuppliers",
  async ({payload, dispatch, navigate}, thunkAPI) => {
    try {
      const response = await post(
        `/supplier`, {
          ...payload
        }
      );
      toast.success("Created");
      console.log({response})
      dispatch(fetchSuppliers());
      navigate("/admin/supplier-management");
    } catch (error) {
      console.error("Error fetching orders:", error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
// update
export const updateSuppliers = createAsyncThunk(
  "supplier/updateSuppliers",
  async ({id, payload, dispatch, navigate}, thunkAPI) => {
    try {
      const response = await patch(
        `/supplier/${id}`, {
          ...payload
        }
      );
      toast.success("Updated");
      console.log({response})
      dispatch(fetchSuppliers());
      navigate("/admin/supplier-management");
    } catch (error) {
      console.error("Error fetching orders:", error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// delete 
export const deleteSuppliers = createAsyncThunk(
  "supplier/deleteSuppliers",
  async ({id, dispatch}, thunkAPI) => {
    try {
      await _delete(
        `/supplier/${id}`
      );
      toast.success("supplier Deleted successfully");
      
      dispatch(fetchSuppliers({search: ""}));

      // return {}
    } catch (error) {
      console.error("Error fetching orders:", error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getSupplierById = createAsyncThunk(
  "supplier/getSupplierById",
  async ({id}, thunkAPI) => {
    try {
      const response = await get(
        `/supplier/${id}`
      );
      console.log({response})
      if (
        response.data &&
        response.data.results &&
        response.data.results.data
      ) {
        return response.data.results.data;
      } else {
        throw new Error("Invalid response structure");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);




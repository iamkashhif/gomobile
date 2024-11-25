import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { get, post, put } from "../../../utils/ApiServices";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async ({ search = "", page = 1, perPage = 10 }, thunkAPI) => {
    try {
      const response = await get(
        `/auth/users?search=${search}&pageNo=${page}&perPage=${perPage}`
      );
      if (
        response.data &&
        response.data.results &&
        response.data.results.data
      ) {
        return response.data.results;
      } else {
        throw new Error("Invalid response structure");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchUser = createAsyncThunk(
  "users/fetchUser",
  async ({ id }, thunkAPI) => {
    try {
      const response = await get(`/auth/user/${id}`);
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
      console.error("Error fetching users:", error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const postUsers = createAsyncThunk(
  "users/postUsers",
  async ({ formData, navigate }, thunkAPI) => {
    try {
      const response = await post("/auth/create-user", formData);
      toast.success("Created");
      navigate("/admin/franchise-management");

      return response.data; // You may want to return the data from the response
    } catch (error) {
      console.error("Error posting user:", error);
      return thunkAPI.rejectWithValue(
        error?.response?.data || error.message || "Unknown error"
      );
    }
  }
);

export const updateUsers = createAsyncThunk(
  "users/updateUsers",
  async ({ id, formData, dispatch, navigate }, thunkAPI) => {
    try {
      const response = await put(`/auth/update-user/${id}`, {
        ...formData,
        status: formData.status === "false" ? false : true,
      });
      toast.success("Updated");

      dispatch(fetchUsers());
      navigate("/admin/franchise-management");
      return response.data;
    } catch (error) {
      console.error("Error posting user:", error);
      return thunkAPI.rejectWithValue(
        error?.response?.data || error.message || "Unknown error"
      );
    }
  }
);

export const fetchDashboard = createAsyncThunk(
  "users/fetchDashboard",
  async (_, thunkAPI) => {
    try {
      const response = await get(`/user/dashboard`);
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
      console.error("Error fetching users:", error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

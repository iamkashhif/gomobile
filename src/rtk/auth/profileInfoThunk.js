import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../../utils/ApiServices";

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (_, thunkAPI) => {
    try {
      const response = await get(`/auth/profile`);
      if (response?.data?.results.data) {
        console.log({ "assss": response.data.results.data})
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

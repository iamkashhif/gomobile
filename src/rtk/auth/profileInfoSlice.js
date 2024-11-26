import { createSlice } from "@reduxjs/toolkit";
import { fetchProfile } from "./profileInfoThunk";

const initialState = {
  profileData: {},
  profileLoading: false,
};

const profileInfoSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.profileLoading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.profileLoading = false;
        state.profileData = action.payload;
        console.log({"dddd":action.payload})
      })
      .addCase(fetchProfile.rejected, (state) => {
        state.ordersloading = false;
        state.error = action.payload || "Failed to fetch profile";
      });
  },
});

export const profileInfoReducer = profileInfoSlice.reducer;
export const { actions: profileInfoActions } = profileInfoSlice;

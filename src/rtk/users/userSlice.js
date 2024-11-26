import { createSlice } from "@reduxjs/toolkit";
import { fetchDashboard, fetchUser, fetchUsers, postUsers } from "./userThunks";

// Async thunk to fetch users
const initialState = {
  usersData: {},
  userloading: false,
  postloading: false,
  error: null,

  userData: [],
  userloading: false,

  DashboardData: [],
  DashboardLoading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //get-user
      .addCase(fetchUsers.pending, (state) => {
        state.userloading = true;
        state.error = null;
        state.usersData = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.usersData = action.payload;
        state.userloading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.userloading = false;
        state.error = action.payload || "Failed to fetch users";
      })

      // post-user
      .addCase(postUsers.pending, (state) => {
        state.postloading = true;
      })
      .addCase(postUsers.fulfilled, (state, action) => {
        state.postloading = false;
      })
      .addCase(postUsers.rejected, (state, action) => {
        state.postloading = false;
      })

      // get-single-user
      .addCase(fetchUser.pending, (state) => {
        state.postloading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.userloading = false;
        state.userData = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.userloading = false;
        // state.userData = action.payload;
      })

      //fetchDashboard
      .addCase(fetchDashboard.pending, (state) => {
        state.DashboardLoading = true;
      })
      .addCase(fetchDashboard.fulfilled, (state, action) => {
        state.DashboardLoading = false;
        state.DashboardData = action.payload;
      })
      .addCase(fetchDashboard.rejected, (state, action) => {
        state.DashboardLoading = false;
        // state.DashboardData = action.payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
export const { actions: usersActions } = usersSlice;

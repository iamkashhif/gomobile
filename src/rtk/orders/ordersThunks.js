import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { get, post, put } from "../../../utils/ApiServices";

export const fetchOrders = createAsyncThunk(
  "orders/fetchOrders",
  async ({ search = "", searchByDate = "", searchByFranchiseOrUser = "", searchByStatus = "", page = 1, perPage = 10 }, thunkAPI) => {
    try {
      const response = await get(
        `/order/orders?search=${search}&searchByDate=${searchByDate}&searchByFranchiseOrUser=${searchByFranchiseOrUser}&searchByStatus=${searchByStatus}&pageNo=${page}&perPage=${perPage}`
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
      console.error("Error fetching orders:", error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getOrderById = createAsyncThunk(
  "orders/getOrderById",
  async ({ orderId }, thunkAPI) => {
    try {
      const response = await get(`/order/${orderId}`);
      console.log({ rrrrrrrrr: response });
      if (response.data && response.data.orderInfo) {
        return response.data.orderInfo;
      } else {
        throw new Error("Invalid response structure");
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateOrderById = createAsyncThunk(
  "orders/updateOrderById",
  async (
    {
      orderId,
      keyObjNeedsTobeUpdate,
      dispatch,
      shipLabel = false,
      profileData = {},
    },
    thunkAPI
  ) => {
    try {
      const obj = {
        order: {
          ...keyObjNeedsTobeUpdate,
        },
      };

      const obj1 = {
        shippingLabel: {
          orderId: orderId,
          userId: profileData.id,
          requestedDate: new Date(),
        },
        order: {
          ...keyObjNeedsTobeUpdate,
        },
      };

      const response = await put(
        `/order/update/${orderId}`,
        shipLabel ? obj1 : obj
      );
      if (response.data && response.data.results) {
        dispatch(fetchOrders({ search: "" }));
        toast.success("Updated");

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

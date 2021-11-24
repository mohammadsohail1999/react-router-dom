import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const baseURL = "https://fakestoreapi.com";
const categorySlice = createSlice({
  name: "Category",
  initialState: {
    categories: [],
    error: "",
  },
  reducers: {
    success: (state, action) => {
      state.categories = action.payload;
      state.error = "";
    },
    errorCat: (state, action) => {
      state.categories = [];
      state.error = action.payload;
    },
  },
});

export const { success, errorCat } = categorySlice.actions;

export const fetchAllCategories = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`${baseURL}/products/categories`);
    console.log(data);
    dispatch(success(data));
  } catch (error) {
    dispatch(errorCat("error in categories"));
  }
};

export default categorySlice.reducer;
export const getCategoryState = (state) => state.categories;

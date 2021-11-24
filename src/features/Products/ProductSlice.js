import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const baseURL = "https://fakestoreapi.com";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    products: [],
    error: "",
  },
  reducers: {
    success: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    successbyID: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    request: (state) => {
      state.loading = true;
    },
    errorProduct: (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.payload;

      setTimeout(() => {
        state.error = "";
      }, 3000);
    },
  },
});

export const { success, request, errorProduct, successbyID } =
  ProductSlice.actions;

export const getAllProducts = () => async (dispatch, getState) => {
  try {
    dispatch(request());
    const { data } = await axios.get(`${baseURL}/products`);
    dispatch(success(data));
  } catch (error) {
    dispatch(errorProduct("error occured"));
  }
};

export const getProductsbyId = (category) => async (dispatch, getState) => {
  try {
    dispatch(request());
    const { data } = await axios.get(
      `${baseURL}/products/category/${category}`
    );

    console.log(data);

    dispatch(successbyID(data));
  } catch (error) {
    dispatch(errorProduct("error Occured"));
  }
};

export default ProductSlice.reducer;

export const getProductState = (state) => state.products;

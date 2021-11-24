import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://fakestoreapi.com";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    auth: localStorage.getItem("token") ? true : false,
    token: localStorage.getItem("token") || null,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      localStorage.setItem("token", JSON.stringify(action.payload));
      state.auth = true;
      state.token = action.payload;
    },
    logout: (state) => {
  
      localStorage.removeItem("token");
      state.auth = false;
      state.token = null;
    },
    error: (state, action) => {
      state.error = action.payload;
      state.token = null;
      state.auth = false;

      setTimeout(() => {
        state.error = null;
      }, 4000);
    },
  },
});

export const { login, logout, error } = AuthSlice.actions;
export const loginUser = (userObj) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post(`${baseURL}/auth/login`, userObj);

    if (data.status) {
      dispatch(error(data.msg));
    } else {
      dispatch(login(data.token));
    }
  } catch (error) {
    console.log(error);
  }
};

export default AuthSlice.reducer;

export const getAuthState = (state) => state.auth;

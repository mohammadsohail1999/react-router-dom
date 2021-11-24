import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
  reducers: {
    addtoCart: (state, action) => {
      if (
        state.cart.length > 0 &&
        state.cart.filter((el) => el.id === action.payload.id).length > 0
      ) {
        localStorage.setItem("cart", JSON.stringify(state.cart));
        return;
      }
      state.cart.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeCart: (state, action) => {
      if (!state.cart.length) return;

      state.cart = state.cart.filter((el) => el.id !== action.payload.id);

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    removeCartItem: (state, action) => {
      state.cart = state.cart.filter((el) => el.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    emptyCart: (state, action) => {
      state.cart = [];
      localStorage.removeItem("cart");
    },
    updateCartItem: (state, action) => {
      state.cart = state.cart.map((el) =>
        el.id === action.payload.id ? action.payload : el
      );
    },
  },
});

export const {
  emptyCart,
  addtoCart,
  removeCart,
  removeCartItem,
  updateCartItem,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCartState = (state) => state.cart;

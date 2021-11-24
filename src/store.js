import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./features/Auth/AuthSlice";
import CartSlice from "./features/Cart/CartSlice";
import CategorySlice from "./features/Categories/CategorySlice";
import ProductSlice from "./features/Products/ProductSlice";

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    products: ProductSlice,
    cart: CartSlice,
    categories: CategorySlice,
  },
});

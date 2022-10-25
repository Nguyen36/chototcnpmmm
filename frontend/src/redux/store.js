import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import productReducer from "./productSlice"
import oderReducer from "./oderSlice";
import cartReducer from './cartSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    product:productReducer,
    oder: oderReducer,
    cart : cartReducer,
  },
});


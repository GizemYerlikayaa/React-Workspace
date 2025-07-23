import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../redux/slices/appSlices";
import productReducer from "../redux/slices/productSlice";
import basketReducer from "../redux/slices/basketSlices";

export const store = configureStore({
  reducer: {
    app: appReducer,
    product: productReducer,
    basket: basketReducer,
  },
});

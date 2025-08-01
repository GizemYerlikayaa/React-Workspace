import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

const initialState = {
  products: getBasketFromStorage(),
  drawer: false,
  totalAmount: 0,
};

const writeFromBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct =
        state.products &&
        state.products.find((product) => product.id === action.payload.id);

      if (findProduct) {
        // Aynı ID'li ürünü güncelle
        const extractedProducts = state.products.filter(
          (product) => product.id !== action.payload.id
        );

        findProduct.count += action.payload.count;
        state.products = [...extractedProducts, findProduct];
      } else {
        // Yeni ürün sepete ekle
        state.products.push(action.payload);
      }

      writeFromBasketToStorage(state.products);
    },
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },

    calculateBasket: (state) => {
      state.totalAmount = 0;
      state.products &&
        state.products.map((product) => {
          state.totalAmount += product.price * product.count;
        });
    },
    removeFromBasket: (state, action) => {
      const filtered = state.products.filter(
        (product) => product.id !== action.payload
      );
      state.products = filtered;
      localStorage.setItem("basket", JSON.stringify(filtered));
    },
  },
});

export const { addToBasket, setDrawer, calculateBasket, removeFromBasket } =
  basketSlice.actions;

export default basketSlice.reducer;

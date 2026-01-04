import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice.jsx";
import favoritesReducer from "./favouritesSlice";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        favorites: favoritesReducer,
        auth: authReducer
    },
});

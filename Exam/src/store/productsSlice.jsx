import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts(state, action) {
            state.items = action.payload;
        },
        addProduct(state, action) {
            state.items.push(action.payload);
            localStorage.setItem("products", JSON.stringify(state.items));
        },
        updateProduct(state, action) {
            const index = state.items.findIndex(
                p => p.id === action.payload.id
            );
            if (index !== -1) {
                state.items[index] = action.payload;
                localStorage.setItem("products", JSON.stringify(state.items));
            }
        }
    }
});

export const { setProducts, addProduct, updateProduct } =
    productsSlice.actions;

export default productsSlice.reducer;

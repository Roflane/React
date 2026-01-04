import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem("cart")) || []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { id, quantity = 1 } = action.payload;
            const existing = state.items.find(item => item.id === id);
            if (existing) {
                existing.quantity = quantity;
            } else {
                state.items.push({ ...action.payload, quantity });
            }
            localStorage.setItem("cart", JSON.stringify(state.items));
        },

        removeFromCart(state, action) {
            state.items = state.items.filter(
                i => i.id !== action.payload
            );
            localStorage.setItem(
                "cart",
                JSON.stringify(state.items)
            );
        },

        changeQuantity(state, action) {
            const item = state.items.find(
                i => i.id === action.payload.id
            );
            if (item) {
                item.quantity = action.payload.quantity;
            }
            localStorage.setItem(
                "cart",
                JSON.stringify(state.items)
            );
        }
    }
});

export const {
    addToCart,
    removeFromCart,
    changeQuantity
} = cartSlice.actions;

export default cartSlice.reducer;

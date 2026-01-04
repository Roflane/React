import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem("favorites")) || []
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        toggleFavorite(state, action) {
            const index = state.items.findIndex(
                item => item.id === action.payload.id
            );

            if (index === -1) {
                state.items.push(action.payload);
            } else {
                state.items.splice(index, 1);
            }

            localStorage.setItem(
                "favorites",
                JSON.stringify(state.items)
            );
        },

        clearFavorites(state) {
            state.items = [];
            localStorage.removeItem("favorites");
        }
    }
});

export const {
    toggleFavorite,
    clearFavorites
} = favoritesSlice.actions;

export default favoritesSlice.reducer;

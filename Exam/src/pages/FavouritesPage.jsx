import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite, clearFavorites } from "../store/favouritesSlice";

export const FavouritesPage = () => {
    const favorites = useSelector(state => state.favorites.items);
    const dispatch = useDispatch();

    if (favorites.length === 0) {
        return (
            <div className="text-center text-gray-300 text-xl mt-10">
                Your favorites list is empty
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6 text-purple-700">Your Favorites</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favorites.map(item => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="h-48 w-full object-cover rounded-md mb-4"
                        />
                        <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                        <p className="text-purple-700 font-bold mb-4">${item.price}</p>

                        <button
                            onClick={() => dispatch(toggleFavorite(item))}
                            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                        >
                            Remove from Favorites
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <button
                    onClick={() => dispatch(clearFavorites())}
                    className="px-6 py-3 bg-purple-700 text-white rounded hover:bg-purple-800 transition"
                >
                    Clear All Favorites
                </button>
            </div>
        </div>
    );
};

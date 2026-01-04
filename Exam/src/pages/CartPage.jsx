import React from "react";
import { Cart } from "../components/Cart";

export const CartPage = () => {
    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-6 text-purple-400">Your Cart</h1>
            <Cart />
        </div>
    );
};

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {addToCart, removeFromCart} from "../store/cartSlice";

export const Cart = () => {
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const handleQuantityChange = (id, value) => {
        const quantity = Math.max(1, value || 1);
        dispatch(addToCart({ id, quantity }));
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
    };

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (!items.length) return <p className="text-center mt-10 text-xl">Your cart is empty</p>;

    return (
        <div className="space-y-4">
            {items.map(item => (
                <div key={item.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded"/>
                        <div>
                            <h2 className="font-semibold">{item.title}</h2>
                            <p>${item.price}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                            className="w-16 p-1 text-black rounded"
                        />
                        <button
                            onClick={() => handleRemove(item.id)}
                            className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded transition"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            ))}
            <div className="text-right mt-4 text-xl font-bold">
                Total: ${total.toFixed(2)}
            </div>
        </div>
    );
};

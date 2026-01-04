import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateProduct } from "../store/productsSlice";

export const EditProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.auth.currentUser);
    const isAuth = useSelector(state => state.auth.isAuth);
    const products = useSelector(state => state.products.items);

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState("");


    const product = products.find(p => p.id === id);

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        } else if (!product) {
            navigate("/");
        } else if (product.ownerId !== currentUser.id) {
            navigate("/");
        } else {
            setTitle(product.title);
            setPrice(product.price);
            setImage(product.image);
        }
    }, [isAuth, product, currentUser, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !price || !image) {
            setError("All fields are required!");
            return;
        }

        const updatedProduct = {
            ...product,
            title,
            price: parseFloat(price),
            image
        };

        dispatch(updateProduct(updatedProduct));
        navigate("/");
    };

    if (!product) return null;

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-gray-800 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold mb-6 text-purple-400">Edit Product</h1>

            {error && <p className="mb-4 text-red-500">{error}</p>}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Product Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

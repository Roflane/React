import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { toggleFavorite } from "../store/favouritesSlice.jsx";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { currentUser, isAuth } = useSelector(state => state.auth);
    const favorites = useSelector(state => state.favorites.items);

    const isFavorite = favorites.some(item => item.id === product.id);
    const isOwner =
        isAuth && product.ownerId === currentUser?.id;

    return (
        <div className="border rounded-lg p-4 flex flex-col shadow-sm hover:shadow-md transition">
            <img
                src={product.image}
                alt={product.title}
                className="h-48 object-contain mb-4"
            />

            <h3 className="font-semibold text-sm mb-2 line-clamp-2">
                {product.title}
            </h3>

            <p className="text-lg font-bold mb-4">
                ${product.price}
            </p>

            <div className="mt-auto flex flex-col gap-2">
                <button
                    onClick={() => dispatch(addToCart(product))}
                    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Add to cart
                </button>

                <button
                    onClick={() => dispatch(toggleFavorite(product))}
                    className={`py-2 rounded border ${
                        isFavorite
                            ? "bg-red-500 text-white"
                            : "bg-white text-gray-700"
                    }`}
                >
                    {isFavorite
                        ? "Remove from favourites"
                        : "Add to favourites"}
                </button>

                {isOwner && (
                    <Link
                        to={`/edit/${product.id}`}
                        className="text-center py-2 rounded bg-gray-800 text-white hover:bg-gray-900"
                    >
                        Edit
                    </Link>
                )}
            </div>
        </div>
    );
};

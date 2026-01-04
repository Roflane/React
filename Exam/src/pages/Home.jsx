import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../store/productsSlice.jsx";
import { ProductCard } from "../components/ProductCard";

export const HomePage = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.items);

    useEffect(() => {
        const storedProducts = localStorage.getItem("products");

        if (storedProducts) {
            dispatch(setProducts(JSON.parse(storedProducts)));
            return;
        }

        fetch("https://fakestoreapi.com/products/category/men's clothing")
            .then(res => res.json())
            .then(data => {
                const preparedProducts = data.map(product => ({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    ownerId: null
                }));

                dispatch(setProducts(preparedProducts));
                localStorage.setItem(
                    "products",
                    JSON.stringify(preparedProducts)
                );
            });
    }, [dispatch]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold mb-6">
                Products
            </h1>

            {products.length === 0 ? (
                <p className="text-gray-500">Товары не найдены</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

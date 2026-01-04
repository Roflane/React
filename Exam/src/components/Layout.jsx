import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RouteDefault = {
    id: 0,
    routeName: "",
    name: ""
}

const routeHome = {
    id: 101,
    routeName: "/",
    name: "Home"
};
const routeCart = {
    id: 102,
    routeName: "/cart",
    name: "Cart"
};
const routeFavourites = {
    id: 103,
    routeName: "/favorites",
    name: "Favorites"
};

const routeArr = [routeHome, routeCart, routeFavourites];
const classActive = "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/50";
const classNotActive = "hover:bg-gray-700 hover:scale-105";

const Layout = () => {
    const isAuth = useSelector(state => state.auth?.isAuth) || false;
    const location = useLocation(); // ✅ useLocation hook

    const isActive = (path) => location.pathname === path;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            {/* Header */}
            <header className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-6 shadow-2xl border-b-2 border-purple-500">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <nav className="flex flex-wrap gap-3">
                        {routeArr.map((route) => (
                            <Link
                                key={route.id.toString()}
                                to={route.routeName}
                                // className="px-5 py-2 rounded-xl font-semibold hover:bg-gray-700 hover:scale-105 transition-all duration-300"
                                className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                                    isActive(route.routeName) ? classActive : classNotActive
                                }`}
                            >
                                {route.name}
                            </Link>
                        ))}

                        {!isAuth && (
                            <>
                                <Link
                                    to="/login"
                                    className="px-5 py-2 rounded-xl font-semibold hover:bg-gray-700 hover:scale-105 transition-all duration-300"

                                    // className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                                    //     isActive(route.routeName)
                                    //         ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/50'
                                    //         : 'hover:bg-gray-700 hover:scale-105'
                                    // }`}
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="px-5 py-2 rounded-xl font-semibold hover:bg-gray-700 hover:scale-105 transition-all duration-300"
                                    // className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                                    //     isActive(route.routeName)
                                    //         ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/50'
                                    //         : 'hover:bg-gray-700 hover:scale-105'
                                    // }`}
                                >
                                    Register
                                </Link>
                            </>
                        )}

                        {isAuth && (
                            <Link
                                to="/add-product"
                               // className="px-5 py-2 rounded-xl font-semibold bg-green-600 hover:bg-green-500 transition-all duration-300"
                                className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
                                    isActive(route.routeName) ? classActive : classNotActive
                                }`}
                            >
                                Add Product
                            </Link>
                        )}
                    </nav>
                </div>
            </header>

            {/* Main content */}
            <main className="container mx-auto px-4 py-8">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
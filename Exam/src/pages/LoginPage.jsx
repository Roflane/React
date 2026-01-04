import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
// import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const dispatch = useDispatch();
    //const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            dispatch(login(user));
            navigate("/");
        } else {
            setError("Invalid email or password!");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-gray-800 rounded-xl shadow-lg">
            <h1 className="text-2xl font-bold mb-6 text-purple-400">Login</h1>

            {error && <p className="mb-4 text-red-500">{error}</p>}

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                />

                <button
                    type="submit"
                    className="mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white font-semibold transition"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

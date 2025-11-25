import './App.css';
import {BrowserRouter, Route, Routes} from "react-router";
import Main from "./Core";

export default function App() {
    return (
        <BrowserRouter>
            <div className="main-wrapper">
                <main>
                    <Routes>
                        <Route path="/" element={<Main />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}
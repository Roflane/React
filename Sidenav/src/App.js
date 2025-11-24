import './App.css';
import SideNavBar from "./Slidebar";
import {BrowserRouter, Route, Routes} from "react-router";
import Main, {Contacts, Reviews, Shop} from "./Core";

export default function App() {
    return (
        <BrowserRouter>
            <div className="main-wrapper">
                <SideNavBar />

                <main>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/reviews" element={<Reviews />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/contacts" element={<Contacts />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}
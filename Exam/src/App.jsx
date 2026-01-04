// Core
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Misc
import NotFoundPage from "./pages/NotFoundPage.jsx";

// First order pages
import {HomePage} from "./pages/Home.jsx";
import {CartPage} from "./pages/CartPage.jsx";
import {FavouritesPage} from "./pages/FavouritesPage.jsx";

// Functional pages
import {LoginPage} from "./pages/LoginPage.jsx";
import {RegisterPage} from "./pages/RegisterPage.jsx";

import {AddProductPage} from "./pages/AddProductPage.jsx";
import {EditProductPage} from "./pages/EditProductPage.jsx";
import Layout from "./components/Layout.jsx";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="cart" element={<CartPage />} />
                  <Route path="favorites" element={<FavouritesPage />} />
                  <Route path="login" element={<LoginPage />} />
                  <Route path="register" element={<RegisterPage />} />
                  <Route path="add-product" element={<AddProductPage />} />
                  <Route path="edit/:id" element={<EditProductPage />} />
                  <Route path="*" element={<NotFoundPage />} />
              </Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App

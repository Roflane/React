import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage.tsx";
import CharactersPage from "./pages/CharactersPage.tsx";
import CharacterDetailPage from "./pages/CharacterDetailPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Layout from "./components/Layout.tsx";
import {FavoritesProvider} from "./context/FavoritesContext.tsx";
import FavoritesPage from "./pages/FavoritesPage.tsx";
import EpisodesPage from "./pages/EpisodesPage.tsx";
import EpisodesDetailsPage from "./pages/EpisodeDetailsPage.tsx";


const App: React.FC = () => {
    return (
        <FavoritesProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="characters" element={<CharactersPage/>}/>
                        <Route path="characters/:id" element={<CharacterDetailPage/>}/>
                        <Route path="favorites" element={<FavoritesPage/>}/>
                        <Route path="about" element={<AboutPage/>}/>
                        <Route path="episodes" element={<EpisodesPage/>}/>
                        <Route path="episodedetails" element={<EpisodesDetailsPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </FavoritesProvider>
    )
}

export default App


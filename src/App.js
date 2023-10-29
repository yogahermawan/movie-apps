import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./pages/Trending";
import Movies from "./pages/Movies";
import Search from "./pages/Search";
import Error from "./pages/Error";


const App = () => {
  const [favourites, setFavourites] = React.useState([]);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', items);
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(JSON.stringify(newFavouriteList));
  };

  useEffect(() => {
    const movieFavourites = localStorage.getItem('react-movie-app-favourites') ? JSON.parse(
      localStorage.getItem('react-movie-app-favourites')) : [];

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);
  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };
  return (
    <>
      <BrowserRouter>
        <Header favourites={favourites} removeFavouriteMovie={removeFavouriteMovie} />
        <Routes>
          <Route path="/" element={<Trending handleFavourites={addFavouriteMovie} favourites={favourites} />} exact />
          <Route path="/movies" element={<Movies handleFavourites={addFavouriteMovie} favourites={favourites} />} exact />
          <Route path="/search" element={<Search handleFavourites={addFavouriteMovie} favourites={favourites} />} exact />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

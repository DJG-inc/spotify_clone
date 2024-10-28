import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (song) => {
    if (!favorites.find(fav => fav.id === song.id)) {
      setFavorites([...favorites, song]);
    }
  };

  const removeFavorite = (songId) => {
    setFavorites(favorites.filter(fav => fav.id !== songId));
  };

  const isFavorite = (songId) => favorites.some(fav => fav.id === songId);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

import { createContext, useState } from "react";

export const PlaylistContext = createContext();

const PlaylistContextProvider = (props) => {
  const [playlists, setPlaylists] = useState([]);

  const createPlaylist = (name) => {
    const newPlaylist = {
      id: playlists.length + 1, // Generar un nuevo ID para la playlist
      name: name,
      songs: [], // Inicialmente sin canciones
    };
    setPlaylists((prevPlaylists) => [...prevPlaylists, newPlaylist]);
  };

  // Función para agregar una canción a una playlist
  const addSongToPlaylist = (playlistId, song) => {
    setPlaylists((prevPlaylists) =>
      prevPlaylists.map((playlist) =>
        String(playlist.id) === String(playlistId) 
          ? {
              ...playlist,
              songs: playlist.songs.some((s) => s.id === song.id)
                ? playlist.songs // No agregar si ya existe
                : [...playlist.songs, song], // Agregar la canción si no existe
            }
          : playlist
      )
    );
  };  

  return (
    <PlaylistContext.Provider
      value={{ playlists, createPlaylist, addSongToPlaylist }}
    >
      {props.children}
    </PlaylistContext.Provider>
  );
};

export default PlaylistContextProvider;

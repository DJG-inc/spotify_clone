// components/Search.js
import React, { useState, useContext } from 'react';
import { songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext'; // Asegúrate de importar el contexto

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { playWithId } = useContext(PlayerContext); // Obtén la función del contexto

  // Filtra las canciones según el término de búsqueda
  const filteredSongs = songsData.filter((song) =>
    song.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Maneja el clic en una canción para reproducirla
  const handleSongClick = (song) => {
    playWithId(song.id); // Usa la función del contexto para reproducir la canción
  };

  return (
    <div className='search-container p-4 text-white'>
      <input
        type="text"
        placeholder="Search for songs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='w-full p-2 bg-[#121212] rounded'
      />
      <div className='mt-4 max-h-60 overflow-y-auto'> {/* Aquí se añade el scroll */}
        {filteredSongs.length > 0 ? (
          filteredSongs.map((song) => (
            <div
              key={song.id}
              className='song-item p-2 border-b border-gray-700 cursor-pointer' // Agregado cursor-pointer
              onClick={() => handleSongClick(song)} // Añade el manejador de clics
            >
              <img src={song.image} alt={song.name} className='w-12 h-12 rounded' />
              <div className='ml-4'>
                <h3 className='font-semibold'>{song.name}</h3>
                <p className='text-sm text-gray-400'>{song.desc}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No songs found</p>
        )}
      </div>
    </div>
  );
};

export default Search;

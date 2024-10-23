// components/Search.js
import React, { useState, useContext } from 'react';
import { songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext'; // Asegúrate de importar el contexto

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSong, setSelectedSong] = useState(null); // Estado para la canción seleccionada
  const { playWithId } = useContext(PlayerContext); // Obtén la función del contexto

  // Filtra las canciones según el término de búsqueda
  const filteredSongs = songsData.filter((song) =>
    song.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Maneja el clic en una canción para reproducirla y mostrar los detalles
  const handleSongClick = (song) => {
    playWithId(song.id); // Usa la función del contexto para reproducir la canción
    setSelectedSong(song); // Establece la canción seleccionada para mostrar los detalles
  };

  return (
    // Contenedor principal
    <div className='search-container flex p-20 text-white h-screen'>
      {/* Panel de búsqueda */}
      <div className='w-1/2'>
        <input
          type="text"
          placeholder="Search for songs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='w-full p-2 bg-[#121212] rounded'
        />
        <div className='mt-5 max-h-80 overflow-y-auto'> 
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song) => (
              <div
                key={song.id}
                className='song-item p-2 border-b border-gray-700 cursor-pointer flex items-center hover:bg-green-500 hover:bg-opacity-10'
                onClick={() => handleSongClick(song)} 
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

      {/* Panel de detalles de la canción */}
      <div className='w-1/2 ml-4'>
        {selectedSong ? (
          <div className='song-details p-4 bg-[#1e1e1e] rounded'>
            <img
              src={selectedSong.image}
              alt={selectedSong.name}
              className='w-full h-64 object-cover rounded mb-4'
            />
            <h2 className='text-2xl font-bold mb-2'>{selectedSong.name}</h2>
            <p className='text-gray-400 mb-2'>{selectedSong.desc}</p>
            <p className='text-gray-400'>{selectedSong.duration}</p>
          </div>
        ) : (
          <p className='text-gray-400 p-2'>Select a song to view details</p>
        )}
      </div>
    </div>
  );
};

export default Search;

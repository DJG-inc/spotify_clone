import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import Search from './components/Search';
import { PlayerContext } from './context/PlayerContext';
import Playlists from './components/Playlists'; // Importar el componente
import Playlist from './components/Playlist'; // Importar el componente

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  if (!audioRef || !track) {
    console.error('El contexto del reproductor no proporciona audioRef o track.');
    return <div className='text-white'>Hubo un error cargando la aplicación. Verifica la consola para más detalles.</div>;
  }

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/album/:id" element={<Display isAlbum />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlists" element={<Playlists />} /> {/* Añadir la ruta aquí */}
          <Route path="/playlist/:id" element={<Playlist />} /> {/* Ruta para una playlist específica */}
        </Routes>
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  );
};

export default App;

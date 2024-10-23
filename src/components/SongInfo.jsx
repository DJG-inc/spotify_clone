// components/SongInfo.js
import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const SongInfo = () => {
  const { track } = useContext(PlayerContext);

  if (!track) {
    return null; // Si no hay una canción seleccionada, no mostrar nada
  }

return (
  <div className="song-info-container text-center justify-center items-center flex flex-col rounded-lg shadow-lg w-full h-full">
    <img src={track.image} alt={track.name} className="w-full h-64 rounded-lg mb-4" />
    <h3 className="font-bold text-2xl mb-2 truncate text-white">{track.name}</h3>
    <p className="text-gray-400 mb-4">{track.desc}</p>
    <p className="text-gray-400 mb-4">Duration: {track.duration}</p>
  </div>
);
};

export default SongInfo;

import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import { useFavorites } from '../context/FavoriteContext';

const SongItem = ({ name, image, desc, id, album, duration }) => {
  const { playWithId } = useContext(PlayerContext);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleFavoriteToggle = () => {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      // Asegúrate de pasar todo el objeto necesario al agregar a favoritos
      addFavorite({ name, image, desc, id, album, duration });
    }
  };

  return (
    <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt={name} onClick={() => playWithId(id)} />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
      <button
        onClick={handleFavoriteToggle}
        className={`mt-2 ${isFavorite(id) ? 'text-red-500' : 'text-white'}`}
      >
        {isFavorite(id) ? '❤️' : '🤍'}
      </button>
    </div>
  );
};

export default SongItem;

import React, { useEffect, useRef } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";
import FavoriteSongs from "./FavoriteSongs";

const Display = () => {
  const displayRef = useRef();
  const { id } = useParams();
  const isAlbum = Boolean(id); // Determina si estamos en una ruta de álbum
  const bgColor = isAlbum && albumsData[Number(id)] ? albumsData[Number(id)].bgColor : "#121212";

  useEffect(() => {
    if (isAlbum && displayRef.current) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else if (displayRef.current) {
      displayRef.current.style.background = "#121212";
    }
  }, [isAlbum, bgColor]);

  return (
    <div ref={displayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="/favorites" element={<FavoriteSongs />} />
      </Routes>
    </div>
  );
};

export default Display;

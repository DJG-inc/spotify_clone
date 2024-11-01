// DisplayHome.js
import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const DisplayHome = () => {
  return (
    <div className="flex h-full">
      <div className="overflow-y-auto">
        <Navbar />
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Feature Charts</h1>
          <div className="flex overflow-auto">
            {albumsData.map((items, index) => (
              <AlbumItem
                key={index}
                name={items.name}
                desc={items.desc}
                id={items.id}
                image={items.image}
              />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
          <div className="flex overflow-auto">
            {songsData.map((items, index) => (
              <SongItem
                key={index}
                name={items.name}
                desc={items.desc}
                id={items.id}
                image={items.image}
                album={items.album}
                duration={items.duration}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;

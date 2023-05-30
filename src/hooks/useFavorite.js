import { useState, useEffect } from "react";
import { FaVoicemail } from "react-icons/fa";

const useFavorite = () => {
  const [favoriteList, setFavoriteList] = useState([]);

  const isFavorite = (item) => favoriteList.includes(item);

  useEffect(() => {
    const localStorageFavoriteList = localStorage.getItem(
      "localStorageFavorites"
    );
    localStorageFavoriteList!=null && localStorageFavoriteList.length > 0 &&
      setFavoriteList(JSON.parse(localStorageFavoriteList));

  }, []);

  const handleFavorite = (item) => {
    isFavorite(item) ? removeFavorite(item) : addFavorite(item);
  };

  const addFavorite = (item) => {
    // console.log(`Image ${item} added to favorite`);
    const tempFavoriteList = [...new Set([...favoriteList, item])];
    setFavoriteList(tempFavoriteList);
    localStorage.setItem(
      "localStorageFavorites",
      JSON.stringify(tempFavoriteList)
    );
  };

  const removeFavorite = (item) => {
    console.log("remove favorite");
    const tempFavoriteList = favoriteList.filter((fav)=>fav!==item)
    setFavoriteList(tempFavoriteList);
    localStorage.setItem(
      "localStorageFavorites",
      JSON.stringify(tempFavoriteList)
    );
  };

  return {
    handleFavorite,
    favoriteList,
  };
};

export default useFavorite;

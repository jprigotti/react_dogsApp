import React, { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";
import usefavorite from "../hooks/useFavorite";
import Dogs_body from "./Dogs_body";
import Dogs_buttons from "./Dogs_buttons";
import "./Dogs.css";
import Dogs_favorite from "./Dogs_favorite";

const DogsContext = createContext();
const { Provider } = DogsContext;
export const useDogsContext = () => useContext(DogsContext);

const Dogs = () => {
  // Llamamos al Custom Hook que hacer la peticion
  const { image, loading, error, getNextImage, showFavoriteImage} = useFetch(
    "https://api.thedogapi.com/v1/images/search"
  );

  // Llamamos al Custom Hook para los favoritos
  const { handleFavorite, favoriteList } = usefavorite();

  return (
    <>
      <div className="main-container">
        <div className="app-container">
          <div className="header-container">
            <h3>The Dogs App</h3>
          </div>

          <Provider
            value={{
              loading,
              image,
              handleFavorite,
              getNextImage,
              favoriteList,
              showFavoriteImage
            }}
          >
            {/* <Dogs_body loadingProp={loading} imageProp={image} />
            <Dogs_buttons addToFavorite={addToFavorite} image={image} getNextImage={getNextImage} /> */}
            <Dogs_body />
            <Dogs_buttons />
            <Dogs_favorite />
          </Provider>

          

        </div>
      </div>
    </>
  );
};

export default Dogs;

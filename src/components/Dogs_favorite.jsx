import React from 'react'
import { useDogsContext } from './Dogs';

const Dogs_favorite = () => {
  const { showFavoriteImage, favoriteList } = useDogsContext();


  return (
    <div className="favorite-container">

      {favoriteList != null &&
        favoriteList.map((favoriteDog, index) => {
          return (

            <img
              key={index}
              className="favorite-dog-card"
              onClick={() => {
                showFavoriteImage(favoriteDog);
              }}
              src={favoriteDog}
            />


          )
        })}
    </div>
  )
}

export default Dogs_favorite
import React from 'react';
import './Dogs.css'
import { FaHeart, FaArrowAltCircleRight } from "react-icons/fa";
import { useDogsContext } from './Dogs';

// const Dogs_buttons = ({addToFavorite, image, getNextImage}) => {
const Dogs_buttons = () => {
    const {handleFavorite, image, getNextImage} = useDogsContext();
  return (
    <div className="buttons-container">
    <div className='buttons-inner-container'>
      <button className='btn' onClick={() => handleFavorite(image)}><FaHeart /></button>
      <button className='btn' onClick={getNextImage}><FaArrowAltCircleRight /></button>
    </div>
  </div>
  )
}

export default Dogs_buttons

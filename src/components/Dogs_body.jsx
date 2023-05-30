import React from 'react';
import './Dogs.css';
import { useDogsContext } from './Dogs';

// const Dogs_body = ({loadingProp, imageProp}) => {
const Dogs_body = () => {
    const {loading,image} = useDogsContext();
    return (
        <div className="body-container">
        {loading ? (<h5>Loading...</h5>) : (<img src={image} alt="dog" className='image' />)}
    </div>
    )
}

export default Dogs_body

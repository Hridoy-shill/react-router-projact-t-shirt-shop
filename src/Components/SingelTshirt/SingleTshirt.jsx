import React from 'react';
import './SingleTshirt.css'

const SingleTshirt = ({tShirt, hendleAddToCart}) => {
    // console.log(tShirt);
    const {_id, price, picture, name, gender}= tShirt;
    return (
        <div className='singlecart-parent'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>price :${price}</p>
            <button onClick={()=>hendleAddToCart(tShirt)}>Buy now</button>
        </div>
    );
};

export default SingleTshirt;
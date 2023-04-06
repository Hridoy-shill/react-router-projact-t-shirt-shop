import { key } from 'localforage';
import React from 'react';

const SideCart = ({cart, handleRemoveToCart}) => {
    return (
        <div>
            <h2>Total Product :{cart.length}</h2>
            {
                cart.map(tshirt => <p 
                key={tshirt._id}>
                {tshirt.name}
                <button onClick={()=>handleRemoveToCart(tshirt._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default SideCart;
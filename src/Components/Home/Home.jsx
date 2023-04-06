import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleTshirt from '../SingelTshirt/SingleTshirt';
import SideCart from '../SideCart/SideCart';
import './Home.css'

const Home = () => {
    const tShirtData = useLoaderData();
    // console.log(tShirtData);

    const [cart, setCart] = useState([]);

    const hendleAddToCart = (tShirt) =>{
        const newCart = [...cart, tShirt];
        setCart(newCart)
        console.log(newCart);
    }

    const handleRemoveToCart = id =>{
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);
    }
    return (
        <div className='home-parent'>
            <div className='cart-parent'>
                {
                    tShirtData.map(tShirt => <SingleTshirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        hendleAddToCart={hendleAddToCart}
                    ></SingleTshirt>)
                }
                
            </div>
            {/* side cart component */}
            <div>
                <SideCart cart={cart} handleRemoveToCart={handleRemoveToCart}></SideCart>
            </div>
        </div>
    );
};

export default Home;
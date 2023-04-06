import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirtData = useLoaderData();
    console.log(tShirtData);
    return (
        <div>
            <h2>this is home</h2>
            <h3>t-shirt Quantity = {tShirtData.length}</h3>
        </div>
    );
};

export default Home;
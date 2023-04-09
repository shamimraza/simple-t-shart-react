import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cards from '../Cards/Cart';
import './Home.css'
import toast  from 'react-hot-toast';



const Home = () => {
    const tshirts = useLoaderData()
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            toast('You have already added this t-shirt')
        } else {
            const newCart = [...cart, tshirt];
            setCart(newCart)
        }

    }

    const removeButton = id => {

        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining)
    }

    // console.log(tshirts);
    return (
        <div className='home-container'>
            <div className='t-shirt-container'>
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className='card-container'>
                <Cards
                    cart={cart}
                    removeButton={removeButton}
                ></Cards>
            </div>
        </div>
    );
};

export default Home;
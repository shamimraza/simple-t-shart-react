import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandapa.css'
export const rightContext = createContext('gold')
export const MoneyContext = createContext(0);


const Grandapa = () => {
    const ring = 'Diamond';
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>has money:{money} </p>
            <MoneyContext.Provider value ={[money, setMoney]}>
                <rightContext.Provider value='golden Ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </rightContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandapa;

/**
 * 1. create context and export 
 * 2. create a provider and pass a value
 * 3. use useContext to receive
 * 
 * 
 */
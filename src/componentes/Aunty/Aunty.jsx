import React from 'react';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';
import Brother from '../Myself/Brother/Brother';

const Aunty = () => {
    return (
        <div>
            <h2>Aunty</h2>
            <section className='flex'>
                <Myself>Shamim</Myself>
                <Sister>Zhomur</Sister>
                
            </section>
        </div>
    );
};

export default Aunty;
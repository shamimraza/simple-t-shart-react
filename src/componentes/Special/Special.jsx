import React, { useContext } from 'react';
import { rightContext } from '../Grandpa/Grandapa';

const Special = ({ring}) => {
    const angti = useContext(rightContext)
    return (
        <div>
            <h2>Special</h2>
            <p><small>Ring: {angti}</small></p>
            
        </div>
    );
};

export default Special;
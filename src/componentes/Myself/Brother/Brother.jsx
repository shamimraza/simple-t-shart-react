import React, { useContext } from 'react';
import { rightContext } from '../../Grandpa/Grandapa';

const Brother = () => {
    const ring =useContext(rightContext);
    return (
        <div>
            <h2>Brother</h2>
            <p><small>Ring: {ring}</small></p>
        </div>
    );
};

export default Brother;
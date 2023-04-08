import React from 'react';

const Cart = ({cart, removeButton}) => {
    return (
        <div>
            <h2>Order summery: {cart.length}</h2>
            {
                cart.map(tshirt=> <p
                key={tshirt._id}
                >{tshirt.name} <button 
                onClick={()=>removeButton(tshirt._id)}
                >X</button></p>)
                
            }
        </div>
      
    );
};

export default Cart;
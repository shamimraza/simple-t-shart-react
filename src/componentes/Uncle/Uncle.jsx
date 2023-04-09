import React, { useContext } from 'react';
import Cousign from '../Cousign/Cousign';
import { MoneyContext } from '../Grandpa/Grandapa';

const Uncle = () => {
    const [money, setMoney]= useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p><small>grandpa money: {money}</small></p>
            <button onClick={()=>setMoney(money+ 1000)}>sent money</button>
            <section className='flex'>
                <Cousign>Nabil</Cousign>
                <Cousign>kabil</Cousign>
               

            </section>
        </div>
    );
};

export default Uncle;
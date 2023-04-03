import React from 'react';
import Features from '../Features/Features';

const PriceCard = ({ product }) => {

    return (
        <div className='text-center bg-sky-400 rounded-md p-3'>
            <div className='font-bold text-4xl'>{product.name}</div>
            <h2 className='mt-3'>{product.price}/month</h2>
            <div>{product.type}</div>
            <p className='font-semibold underline'>Features:</p>
            {
                product.features.map((feature, idx)=><Features key={idx} feature={feature}></Features>)
            }
        </div>
    );
};

export default PriceCard;
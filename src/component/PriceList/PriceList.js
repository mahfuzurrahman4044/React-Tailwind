import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])


    return (
        <div>
            <h2 className='text-sky-600 text-5xl text-center'>Awesome Affordable Proces</h2>
            <div className='grid lg:grid-cols-3 mt-5 gap-5 mx-5'>
            {
                products.map(product=><PriceCard key={product.id} product={product}></PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;
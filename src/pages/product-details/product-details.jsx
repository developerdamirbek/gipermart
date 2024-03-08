import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetAll } from '../../layout/header/service/query/useGetAll'; 

export const ProductDetails = () => {
    const { id } = useParams();
    const { data: products, isLoading, error } = useGetAll(); 


    console.log('Product ID:', id);
    console.log('Product Data:', products);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const product = products?.find(item => item.id === Number(id));



    return (
        <div className='mt-[150px]'>
            <img src={product.img} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
        </div>
    );
};

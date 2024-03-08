import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useGetCatalog } from './service/useGetCatalog';
import { ProductCard } from '../../components/product-card/product-card';

export const SingleCatalog = () => {



    const { datakey } = useParams();

    const { data } = useGetCatalog({ datakey });
    
    return (
        <div className='container mt-[160px]'>
            <h2 className='text-[32px] font-medium text-[#333] mb-10'>Продукты</h2>
            <div className='grid gap-7 grid-cols-5'>
                {data?.map((item) => (
                    <ProductCard key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

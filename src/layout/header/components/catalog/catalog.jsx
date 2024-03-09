import React from 'react'
import { useGetCategories } from '../../../../pages/home/service/query/useGetCategories'
import { Link, useLocation } from 'react-router-dom'

export const Catalog = ({onClose}) => {
    const { data, isLoading } = useGetCategories();

    

    return (
        <div className={`border-2 p-10 flex max-sm:max-h-[400px] max-sm:h-full  max-sm:overflow-y-auto max-sm:overflow-hidden  max-sm:p-5 gap-8  flex-wrap bg-white items-center max-sm:gap-1 mflex-col justify-center   rounded-md `} >
            {data?.map((item) => (
                <Link key={item.name} className='max-sm:w-full' onClick={onClose} to={`/category/${item.name}`} >
                    <div className='flex w-[300px] max-sm:max-w-full max-sm:flex max-sm:w-full max-sm:h-auto  h-[180px] rounded-lg p-5 max-sm:p-3 gap-3 max-sm:gap-16 bg-[#f4f4f4] items-center'>
                        <div className='w-[130px] max-sm:w-[60px]'>
                            <img src={item.img} alt="" />
                        </div>
                        <div>
                            <h3>{item.text}</h3>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};



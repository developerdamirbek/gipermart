import React from 'react';
import { useGetCategories } from '../../../../pages/home/service/query/useGetCategories';
import { Link } from 'react-router-dom';

export const Catalog = ({ onClose }) => {
    const { data, isLoading } = useGetCategories();

    const closeCatalog = () => {
        onClose();
    };

    if (isLoading) {
        return (
            <div className="border-2 p-10 flex max-sm:max-h-[400px] max-sm:h-full  max-sm:overflow-y-auto max-sm:overflow-hidden  max-sm:p-5 gap-8  flex-wrap bg-white items-center max-sm:gap-1 mflex-col justify-center   rounded-md ">
                {[...Array(6)].map((_, index) => (
                    <div key={index} role="status" className="flex  items-center justify-center h-[180px] max-sm:h-20 w-[300px] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-400">
                        <svg className="w-10 max-sm:w-5 max-sm:h-5 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className={`border-2 p-10 flex max-sm:max-h-[400px] max-sm:h-full  max-sm:overflow-y-auto max-sm:overflow-hidden  max-sm:p-5 gap-8  flex-wrap bg-white items-center max-sm:gap-1 mflex-col justify-center   rounded-md `} >
            {data?.map((item) => (
                <Link key={item.name} className='max-sm:w-full' onClick={closeCatalog} to={`/category/${item.name}`} >
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

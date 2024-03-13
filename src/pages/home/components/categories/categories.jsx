import React from 'react'
import { useGetCategories } from '../../service/query/useGetCategories'

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Link } from 'react-router-dom';

export const Categories = () => {

    const { data, isLoading } = useGetCategories();

    return (
        <div className='container'>
            {isLoading ? (
                <div className='flex ic justify-between gap-5'>
                    <div role="status" className="max-w-full w-full p-4 border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400" />
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div role="status" className="max-w-full w-full p-4 border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400" />
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div role="status" className="max-w-full w-full p-4 border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400" />
                        <span className="sr-only">Loading...</span>
                    </div>
                    <div role="status" className="max-w-full w-full p-4 border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5" />
                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400" />
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            ) : <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                loop={true}
                slidesPerView={4}
                autoplay={{
                    delay: 2200,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    360: {
                        slidesPerView: 1,
                    },
                    440: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {data?.map((item) => (
                    <SwiperSlide key={item.id}>
                        <Link to={`/category/${item.name}`}>
                            <div className=' py-[14px] flex items-center gap-4 px-4 max-sm:px-2 hover:bg-[#f1f1f1] bg-[#F6F6F6] h-auto'>
                                <div className='w-[96px] h-[96px] max-sm:w-[70px] max-sm:h-[70px]: overflow-hidden '>
                                    <img className=' object-cover object-center ' src={item.img} alt="category image" />
                                </div>
                                <div>
                                    <h3 className=' max-sm:text-[14px] text-[16px] text-black '>{item.text}</h3>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}



            </Swiper>}
        </div>
    )
}

import React from 'react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetBanners } from '../../service/query/useGetBanners';
import SwiperCore from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { PrevIcon } from '../../../../assets/icons/prev-icon';
import { NextIcon } from '../../../../assets/icons/next-icon';

import 'swiper/css';

SwiperCore.use([Navigation, Autoplay, Pagination]);

export const Banners = () => {
    const { data, isLoading } = useGetBanners();

    return (
        <div className='relative h-[100%]'>
            <Swiper
                spaceBetween={0}
                cssMode={true}
                loop={true}
                slidesPerView={1}
                navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}

            >
                {isLoading ? (
                    <>
                        {[...Array(3)]?.map((_, i) => (
                            <SwiperSlide className='' key={i}>


                                <div role="status" className="flex items-center justify-center h-[500px] max-w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-500">
                                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>


                            </SwiperSlide>
                        ))}
                    </>
                ) : (
                    <>
                        {data?.map((item) => (
                            <SwiperSlide className='' key={item.id}>
                                <img className='object-cover w-full h-full' src={item.img} alt="" />
                            </SwiperSlide>
                        ))}
                    </>
                )}

            </Swiper>
            <div className='absolute flex w-[100%] top-1/2 transform z-[40] -translate-y-1/2'>
                <button className='arrow-left absolute max-sm:scale-50  arrow left-[8%]'>
                    <PrevIcon />
                </button>
                <button className='arrow-right absolute max-sm:scale-50  arrow right-[8%] '>
                    <NextIcon />
                </button>
            </div>
        </div>
    );
};



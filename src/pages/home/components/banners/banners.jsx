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
    const { data } = useGetBanners();

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
                pagination={{clickable: true}}
                
            >
                {data?.map((item) => (
                    <SwiperSlide className='' key={item.id}>
                            <img className='object-cover w-full h-full' src={item.img} alt="" />
                    </SwiperSlide>
                ))}
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



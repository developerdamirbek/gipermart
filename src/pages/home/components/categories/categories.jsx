import React from 'react'
import { useGetCategories } from '../../service/query/useGetCategories'

import { Autoplay, EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-creative';
import { Link } from 'react-router-dom';

export const Categories = () => {

    const { data } = useGetCategories();

    return (
        <div className='container'>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                loop={true}
                slidesPerView={4}
                cssMode={true}
                autoplay={{
                    delay: 2200,
                    disableOnInteraction: false,
                }}
                effect=''
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                breakpoints={{
                    360: {
                        slidesPerView: 1,
                        effect: 'creative'
                    },
                    440: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                    },
                    // when window width is >= 1024px
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



            </Swiper>
        </div>
    )
}

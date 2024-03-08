import React from 'react'
import { useGetPhones } from '../../service/query/useGetPhones'
import { ProductCard } from '../../../../components/product-card/product-card'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export const Phones = () => {

  const { data } = useGetPhones()

  return (
    <div>
      <Swiper
        spaceBetween={10}
        loop={true}
        slidesPerView={5}
        breakpoints={
          {
            360: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            500: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            630: {
              slidesPerView: 3
            },
            978: {
              slidesPerView: 4
            },
            1200: {
              slidesPerView: 5
            }
          }
        }
        className=' justify-center '
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard {...item} />
          </SwiperSlide>
        ))}

        {/* <div className='absolute flex w-[100%] top-1/2 transform z-[40] -translate-y-1/2'>
          <button className='arrow-left absolute  arrow left-[8%]'>
            <PrevIcon />
          </button>
          <button className='arrow-right absolute  arrow right-[8%] '>
            <NextIcon />
          </button>
        </div> */}

      </Swiper>
    </div>
  )
}

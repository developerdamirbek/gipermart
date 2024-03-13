import React from 'react'
import { useGetPhones } from '../../service/query/useGetPhones'
import { ProductCard } from '../../../../components/product-card/product-card'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export const Phones = () => {

  const { data, isLoading } = useGetPhones()

  return (
    <div>
      <Swiper
        spaceBetween={10}
        loop={true}
        slidesPerView={5}
        breakpoints={
          {
            360: {
              slidesPerView: 2,
              spaceBetween: 5
            },
            460: {
              slidesPerView: 3,
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
            {isLoading ? (
              <div role="status" className="max-w-full p-4 border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-300">
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-300">
                  <svg className="w-10 h-10 text-gray-200 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  </svg>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-48 mb-4" />
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5" />
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300 mb-2.5" />
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-300" />
                <div className="flex items-center mt-4">
                  <div className='flex w-full items-center justify-between'>
                    <div>
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-300 w-32 mb-2" />
                      <div className="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-300" />
                    </div>
                    <div>
                      <div className="h-10 bg-gray-200 rounded-lg  dark:bg-gray-300 w-10 mb-2" />
                    </div>
                  </div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <ProductCard {...item} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

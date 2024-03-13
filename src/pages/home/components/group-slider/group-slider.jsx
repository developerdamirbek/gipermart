import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useGetPhones } from '../../service/query/useGetPhones';
import { useGetNotebooks } from '../../service/query/useGetNotebooks';
import { useGetAvto } from '../../service/query/useGetAvto';
import { useGetcomputers } from '../../service/query/useGetComputers';
import { useGetSport } from '../../service/query/useGetSport';
import { useGetWashingm } from '../../service/query/useGetWashingm';

import 'swiper/css';
import { Link } from 'react-router-dom';

export const GroupSlider = () => {

    const { data: nooteboks } = useGetNotebooks()
    const { data: avto } = useGetAvto()
    const { data: phones } = useGetPhones()
    const { data: sport } = useGetSport()
    const { data: washingMachine } = useGetWashingm()
    const { data: computers } = useGetcomputers()

    return (
        <div>
            <Swiper
                spaceBetween={30}
                loop={true}
                slidesPerView={3}
            // breakpoints={
            //   {
            //     360: {
            //       slidesPerView: 2,
            //       spaceBetween: 5
            //     },
            //     460: {
            //       slidesPerView: 3,
            //       spaceBetween: 10
            //     },
            //     630: {
            //       slidesPerView: 3
            //     },
            //     978: {
            //       slidesPerView: 4
            //     },
            //     1200: {
            //       slidesPerView: 5
            //     }
            //   }
            // }
            >
                <SwiperSlide>
                    <h2 className='text-[24px] mb-6 text-[#333] pb-[14px] max-w-[417px] border-b '>Смартфоны и планшеты</h2>
                    {phones?.slice(0, 3).map((item) => (
                        <Link key={item.id} to={`/products/${item.id}`}>
                            <div key={item.id} className='flex max-w-[413px] w-full items-start mb-6 gap-4'>
                                <div className='w-[140px] h-[140px] overflow-hidden'>
                                    <img className='object-cover object-center' src={item.img} alt="" />
                                </div>
                                <div className='h-[157px] w-full pb-5 flex flex-col justify-between'>
                                    <h3>{item.title}</h3>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </SwiperSlide>
                <SwiperSlide>
                    <h2 className='text-[24px] mb-6 text-[#333] pb-[14px] max-w-[417px] border-b '>Ноутбуки, планшеты и компьютеры</h2>
                    {nooteboks?.slice(0, 3).map((item) => (
                        <Link key={item.id} to={`/products/${item.id}`}>
                        <div key={item.id} className='flex max-w-[413px] w-full items-start mb-6 gap-4'>
                            <div className='w-[140px] h-[140px] overflow-hidden'>
                                <img className='object-cover object-center' src={item.img} alt="" />
                            </div>
                            <div className='h-[157px] w-full pb-5 flex flex-col justify-between'>
                                <h3>{item.title}</h3>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    </Link>
                    ))}
                </SwiperSlide>
                <SwiperSlide>
                    <h2 className='text-[24px] mb-6 text-[#333] pb-[14px] max-w-[417px] border-b '>Авто мото товары</h2>
                    {avto?.slice(0, 3).map((item) => (
                        <Link key={item.id} to={`/products/${item.id}`}>
                        <div key={item.id} className='flex max-w-[413px] w-full items-start mb-6 gap-4'>
                            <div className='w-[140px] h-[140px] overflow-hidden'>
                                <img className='object-cover object-center' src={item.img} alt="" />
                            </div>
                            <div className='h-[157px] w-full pb-5 flex flex-col justify-between'>
                                <h3>{item.title}</h3>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    </Link>
                    ))}
                </SwiperSlide>
                <SwiperSlide>
                    <h2 className='text-[24px] mb-6 text-[#333] pb-[14px] max-w-[417px] border-b '>Компьютеры для геймеров</h2>

                    {computers?.slice(0, 3).map((item) => (
                        <Link key={item.id} to={`/products/${item.id}`}>
                        <div key={item.id} className='flex max-w-[413px] w-full items-start mb-6 gap-4'>
                            <div className='w-[140px] h-[140px] overflow-hidden'>
                                <img className='object-cover object-center' src={item.img} alt="" />
                            </div>
                            <div className='h-[157px] w-full pb-5 flex flex-col justify-between'>
                                <h3>{item.title}</h3>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    </Link>
                    ))}
                </SwiperSlide>
                <SwiperSlide>
                    <h2 className='text-[24px] mb-6 text-[#333] pb-[14px] max-w-[417px] border-b '>Бытовая техника</h2>

                    {washingMachine?.slice(0, 3).map((item) => (
                        <Link key={item.id} to={`/products/${item.id}`}>
                        <div key={item.id} className='flex max-w-[413px] w-full items-start mb-6 gap-4'>
                            <div className='w-[140px] h-[140px] overflow-hidden'>
                                <img className='object-cover object-center' src={item.img} alt="" />
                            </div>
                            <div className='h-[157px] w-full pb-5 flex flex-col justify-between'>
                                <h3>{item.title}</h3>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    </Link>
                    ))}
                </SwiperSlide>
                <SwiperSlide>
                    <h2 className='text-[24px] mb-6 text-[#333] pb-[14px] max-w-[417px] border-b '>Спорт товары</h2>

                    {sport?.slice(0, 3).map((item) => (
                        <Link key={item.id} to={`/products/${item.id}`}>
                        <div  className='flex max-w-[413px] w-full items-start mb-6 gap-4'>
                            <div className='w-[140px] h-[140px] overflow-hidden'>
                                <img className='object-cover object-center' src={item.img} alt="" />
                            </div>
                            <div className='h-[157px] w-full pb-5 flex flex-col justify-between'>
                                <h3>{item.title}</h3>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    </Link>
                    ))}
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

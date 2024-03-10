import React from 'react'
import { Banners } from './components/banners'
import { Categories } from './components/categories/categories'
import { useGetPhones } from './service/query/useGetPhones'
import { Phones } from './components/phones'
import { Ads } from './components/ads'



export const Home = () => {




    return (
        <div className='mt-[139px] max-sm:mt-[160px]'>
            <section>
                <Banners />
            </section>
            <section className=' pt-8 pb-12 '>
                <Categories />
            </section>
            <section className='pb-[48px]'>
                <div className="container">
                    <h2 className='text-[#333] mb-6 text-[24px] font-semibold'>Смартфоны и планшеты</h2>
                    <Phones/>
                </div>
            </section>
            <section className='pt-[16px] pb-[30px] max-sm:pb-4 max-sm:pt-2 bg-[#3DBFFE]'>
                <div className="container">
                    <Ads/>
                </div>
            </section>
        </div>
    )
}

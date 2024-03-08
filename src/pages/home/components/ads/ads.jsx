import React from 'react'
import { useGetAds } from '../../service/query/useGetAds'

export const Ads = () => {

    const {data} = useGetAds()

  return (
    <div>
        <h2 className=' text-[#281800] text-[24px] font-semibold mb-6 '>Акции</h2>
        <div className='flex items-center gap-6 justify-between'>
            {data?.map((item) => (
                <div>
                    <img src={item.img} alt="" />
                </div>
            ))}
        </div>
    </div>
  )
}

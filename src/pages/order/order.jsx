import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Order = () => {
    const navigate = useNavigate()

    const cartItems = useSelector(state => state.cart.cartItems)

    if(!cartItems.length || window.location.pathname == 'http://localhost:5173/order'){
        navigate('/cart')
    }

    return (
        <div className='mt-[135px]'>
            <div className="container">
                <div className='grid grid-cols-12'>
                    <div className='col-span-6 pr-4 border-r-2'>
                        <h2 className=' text-[34px] font-semibold text-[#333] mb-[56px] mt-5 '>
                            Оформление заказа
                        </h2>
                        <p className=' text-[16px] text-[#E44542] mb-3 '>Уже покупали у нас?</p>
                        <h3 className=' text-[28px] text-[#333] font-semibold mb-4 '>
                            Контактные данные
                        </h3>
                        <form>
                            <div className='flex flex-col'>
                                <label className=' text-[16px] text-[#333] mb-3 ' htmlFor="">Контактное лицо (ФИО)</label>
                                <input className=' border border-[#808080] p-[10px] outline-none focus:border-[#3DBFFE]' type="text" />
                            </div>
                            <div className='flex flex-col mb-6'>
                                <label className=' text-[16px] text-[#333] mb-3 ' htmlFor="">Контактный телефон</label>
                                <input className=' border border-[#808080] p-[10px] outline-none focus:border-[#3DBFFE]' type="text" />
                            </div>
                            <div className='flex flex-col mb-6'>
                                <h3 className=' text-[28px] font-semibold text-[#333] mb-4'>Доставка</h3>
                                <label className=' text-[16px] text-[#333] mb-3 ' htmlFor="">Населенный пункт</label>
                                <input className=' border border-[#808080] p-[10px] outline-none focus:border-[#3DBFFE]' type="text" />
                            </div>
                            <div className='flex mb-[36px] items-center gap-6'>
                                <div>
                                    <input type="radio" name="order" id="order" />
                                </div>
                                <div>
                                    <h3 className=' text-[20px] text-[#333] font-medium mb-2'>Самовывоз</h3>
                                    <p className='text-[14px] text-[#747474]'>На пункте выдачи</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-6'>
                                <div>
                                    <input type="radio" name="order" id="order" />
                                </div>
                                <div>
                                    <h3 className=' text-[20px] text-[#333] font-medium mb-2'>Курьером</h3>
                                    <p className='text-[14px] text-[#747474]'>Доставка курьером</p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='col-span-6 '></div>
                </div>
            </div>
        </div>
    )
}
export default Order
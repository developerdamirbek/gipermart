import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementCount, decrementCount } from '../../redux/reducers/cartReducer';
import { toast } from 'react-toastify';
import { DeleteIcon } from '../../assets/icons/delete-icon';
import bgImg from '../../assets/images/not.jpg'

export const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
        toast.info("Product removed from cart!");
    };

    const handleIncrement = (productId) => {
        dispatch(incrementCount(productId));
    };

    const handleDecrement = (productId) => {
        const currentItem = cartItems.find(item => item.id === productId);
        if (currentItem.quantity === 1) {
            return;
        }
        dispatch(decrementCount(productId));
    };

    const calculateSubtotal = (item) => {
        const priceWithoutSpaces = item.price.replace(/\s/g, '');
        return parseInt(priceWithoutSpaces, 10) * item.quantity;
    };

    const total = cartItems.reduce((acc, item) => {
        return acc + calculateSubtotal(item);
    }, 0);

    return (
        <div className='mt-[140px] max-sm:mt-[160px] container'>
            <section>
                <h1 className='text-[24px] font-medium text-[#333] mb-6'>Корзина</h1>
                <div className='mx-auto grid grid-cols-12 sm:flex sm:flex-col md:grid relative max-sm:flex max-sm:flex-col gap-7'>
                    <div className='col-span-9'>
                        <div className="grid grid-cols-1 gap-4">
                            {cartItems.length === 0 ? (
                                <div className='flex flex-col items-center justify-center'>
                                    <h2 className="text-[20px] text-center text-[#333]">No products...</h2>
                                    <div className='w-[400px] max-sm:w-[200px] flex items-center justify-center'>
                                        <img className='' src={bgImg} alt="" />
                                    </div>
                                </div>
                            ) : (
                                cartItems.map(item => (
                                    <div key={item.id} className="border-b-2 flex max-sm:flex-col items-start justify-between border-gray-200 p-4">
                                        <div className='flex h-full items-start gap-6'>
                                            <div className='w-[200px] max-sm:w-[90px] h-[200px] flex items-center max-sm:items-start justify-center overflow-hidden '>
                                                <img className='object-cover object-center' src={item.img} alt='' />
                                            </div>
                                            <div className="flex max-sm:hidden justify-between flex-col items-start">
                                                <h2 className="text-[24px] max-sm:text-[14px] mb-5 text-[#333] font-semibold">{item.title.slice(0, 34)}</h2>
                                                <div>
                                                    <button className="text-red-500 hover:text-red-700" onClick={() => handleRemoveFromCart(item.id)}>
                                                        <div className='text-[#999] gap-2 flex items-center hover:text-red-400 transition-all duration-300'>
                                                            <DeleteIcon />
                                                            Удалить
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='hidden max-sm:block'>
                                                <h2 className="text-[24px] max-sm:mb-3 max-sm:text-[14px] mb-5 text-[#333] font-semibold">{item.title.slice(0, 20)}</h2>
                                                <p className="text-[#333] max-sm:text-[14px] max-sm:mb-3 text-[24px] font-semibold mb-10 ">{item.price} Сум</p>
                                                <div className='flex max-sm:pb-4 max-sm:border-b-2 mb-4'>
                                                    <button className="text-md bg-gray-200 px-[11px] py-1 rounded-md" onClick={() => handleDecrement(item.id)}>-</button>
                                                    <p className="text-lg max-sm:text-[16px] font-semibold mx-2">{item.quantity}</p>
                                                    <button className="text-md bg-gray-200 px-2 py-1 rounded-md" onClick={() => handleIncrement(item.id)}>+</button>
                                                </div>
                                                <div>
                                                    <button className="text-red-500 hover:text-red-700" onClick={() => handleRemoveFromCart(item.id)}>
                                                        <div className='text-[#999] gap-2 flex items-center hover:text-red-400 transition-all duration-300'>
                                                            <DeleteIcon />
                                                            Удалить
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex max-sm:hidden flex-col items-end mt-2">
                                            <p className="text-[#333] text-[24px] font-semibold mb-10 ">{item.price} Сум</p>
                                            <div className='flex mb-10'>
                                                <button className="text-md bg-gray-200 px-[11px] py-1 rounded-md" onClick={() => handleDecrement(item.id)}>-</button>
                                                <p className="text-lg font-semibold mx-2">{item.quantity}</p>
                                                <button className="text-md bg-gray-200 px-2 py-1 rounded-md" onClick={() => handleIncrement(item.id)}>+</button>
                                            </div>
                                            <p className="text-[#333] text-[18px] font-semibold mb-10 ">Общий
                                                : {calculateSubtotal(item)} Сум</p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                    <div className='col-span-3 sticky max-sm:static max-sm:top-0 top-[140px] h-[200px] '>
                        <div className="p-6 bg-[#F7F7F7] ">
                            <h3 className='text-[24px] mb-4 text-[#333]'>В корзине</h3>
                            <p className='text-[16px] text-[#333] mb-[17px]'>Товаров: {cartItems.length}</p>
                            <input className='mb-3 outline-none p-1 focus:border-slate-400 border border-transparent bg-transparent text-[#333] text-[16px] placeholder:text-[#E44542]' type="text" placeholder='Введите промокод' />
                            <p className="text-xl font-semibold">{total} Сум</p>
                        </div>
                        <button className='text-[20px] text-[#281800] bg-[#3DBFFE] w-full py-[15px] '>
                            Оформить заказ
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetAll } from '../../layout/header/service/query/useGetAll';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/reducers/cartReducer';
import { addToLiked, removeFromLiked } from '../../redux/reducers/likedReducer';
import { toast } from 'react-toastify';

export const ProductDetails = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const likedProducts = useSelector(state => state.liked.likedProducts);
    const [isAddedToCart, setIsAddedToCart] = React.useState(false);
    const [isLiked, setIsLiked] = React.useState(false);
    const { id } = useParams();
    const { data: products, isLoading, error } = useGetAll();

    const product = products?.find(item => item.id === Number(id));

    const handleAddToCart = () => {
        dispatch(addToCart({ id: product.id, title: product.title, price: product.price, img: product.img, quantity: 1 }));
    };

    React.useEffect(() => {
        if (product) {
            setIsAddedToCart(cartItems.some(item => item.id === product.id));
            setIsLiked(likedProducts.includes(product.id));
        }
    }, [cartItems, likedProducts, product]);

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(product.id));
        toast.info("Товар удален из корзины!");
    };

    const handleToggleLike = () => {
        if (isLiked) {
            dispatch(removeFromLiked(product.id));
        } else {
            dispatch(addToLiked(product.id));
        }
    };

    const handleButtonClick = () => {
        if (!isAddedToCart) {
            handleAddToCart();
            toast.success("Товар добавлен в корзину!")
        } else {
            handleRemoveFromCart();
            toast.info("Товар удален из корзины!");

        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='mt-[150px]'>
            <div className="container">
                <h2 className=' text-[24px] font-semibold mb-[18px] '>{product.title}</h2>
                <div className='pb-4 flex items-center gap-9 border-b mb-6'>
                    <div className="flex gap-[2px] items-center">
                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <span>(0)</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <button onClick={handleToggleLike}>
                            {isLiked ? (
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_53395_442)">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="red" />
                                    </g>
                                </svg>
                            ) : (
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_53395_442)">
                                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="black" strokeWidth="2" />
                                    </g>
                                </svg>
                            )}
                        </button>
                        <p>В избранное</p>
                    </div>


                </div>
                <div className='flex items-start justify-between'>
                    <div className='flex items-start gap-10'>
                        <div className='max-w-[435px] overflow-hidden pb-5 px-10 flex items-center justify-center'>
                            <img src={product.img} alt="" />
                        </div>
                        <div>
                            {product.rame && <div>
                                <p className=' text-[16px] font-medium text-[#333] mb-2 '>Объем памяти</p>
                                <span className='border-2 inline-block mb-6 border-red-500 py-2 px-[14px]'>{product.rame}</span>
                            </div>}
                            <p className=' text-[18px] text-[#333] mb-4 '>Характеристики</p>
                            {product.color && <p className=' text-[16px] text-[#999] '>Цвет: <span className='ml-2 inline-block text-[16px] text-[#333] '>{product.color}</span></p>}
                            {product.brand && <p className=' text-[16px] text-[#999] '>Бренд: <span className='ml-2 inline-block text-[16px] text-[#333] '>{product.brand}</span></p>}
                            {product.rame && <p className=' text-[16px] text-[#999] '>экран: <span className='ml-2 inline-block text-[16px] text-[#333] '>6.2"/2400x1080 Пикс</span></p>}
                            {product.rame && <p className=' text-[16px] text-[#999] '>оперативная память: <span className='ml-2 inline-block text-[16px] text-[#333] '>8GB</span></p>}
                            {product.rame && <p className=' text-[16px] text-[#999] '>память: <span className='ml-2 inline-block text-[16px] text-[#333] '>{product.rame}</span></p>}
                            {product.rame && <p className=' text-[16px] text-[#999] '>4 камеры: <span className='ml-2 inline-block text-[16px] text-[#333] '>64/12/12</span></p>}
                            {product.rame && <p className=' text-[16px] text-[#999] '>беспроводные интерфейсы: <span className='ml-2 inline-block text-[16px] text-[#333] '>NFC, Wi-Fi, Bluetooth 5.0</span></p>}
                            {product.ram && <p className=' text-[16px] text-[#999] '>ОЗУ: <span className='ml-2 inline-block text-[16px] text-[#333] '>{product.ram}</span> </p>}
                            {product.core && <p className=' text-[16px] text-[#999] '>Процессор: <span className='ml-2 inline-block text-[16px] text-[#333] '>{product.core}</span> </p>}
                            {product.geForce && <p className=' text-[16px] text-[#999] '>Bидеокарт: <span className='ml-2 inline-block text-[16px] text-[#333] '>{product.geForce}</span> </p>}
                            {product.display && <p className=' text-[16px] text-[#999] '>Дисплей: <span className='ml-2 inline-block text-[16px] text-[#333] '>{product.display}</span> </p>}
                            {product.memory && <p className=' text-[16px] text-[#999] '>память: <span className='ml-2 inline-block text-[16px] text-[#333] '>{product.memory}</span> </p>}
                            {product.weight && <p className=' text-[16px] text-[#999] '>масса: <span className='ml-2 inline-block text-[16px] text-[#333] '>{product.weight}</span> </p>}
                            {product.details && (
                                <div>
                                    {product.details.display && <p className=' text-[16px] text-[#999] '>Разрешение экрана: <span className='ml-2 inline-block text-[16px] text-[#333] '>{product.details.display}</span> </p>}
                                    {product.details.frequency && <p className=' text-[16px] text-[#999] '>Частота обновления: <span className='ml-2 inline-block text-[16px] text-[#333] '>{product.details.frequency}</span> </p>}
                                    {product.details.weight && <p className=' text-[16px] text-[#999] '>Вес: <span className='ml-2 inline-block text-[16px] text-[#333] '>{product.details.weight}</span> </p>}
                                    {product.details.security && <p className=' text-[16px] text-[#999] '>Технология защиты зрения: <span className='ml-2 inline-block text-[16px] text-[#333] '>{product.details.security}</span> </p>}
                                    {product.details.diagonal && <p className=' text-[16px] text-[#999] '>Диагональ: <span className='ml-2 inline-block text-[16px] text-[#333] '>{product.details.diagonal}</span> </p>}
                                </div>

                            )}
                        </div>
                    </div>
                    <div className='border p-6 max-w-[340px] w-full'>
                        <h3 className='text-[36px] text-[#333] font-semibold mb-[21px] '>{product.price} Сум</h3>
                        {isAddedToCart ? (

                            <button onClick={handleRemoveFromCart} className='py-3 w-full bg-[#f76060] text-[#fff] '>
                                Удалить из корзины
                            </button>
                        ) : (
                            <button onClick={() => handleButtonClick(id)} className='p-[7px] py-3 w-full bg-[#3DBFFE] text-[#fff]'>
                                Добавить в корзину
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};


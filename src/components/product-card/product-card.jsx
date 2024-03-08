import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/reducers/cartReducer';
import { addToLiked, removeFromLiked } from '../../redux/reducers/likedReducer';
import { CartIcon } from '../../assets/icons/cart-icon';
import { Link } from 'react-router-dom';
import { EyeIcon } from '../../assets/icons/eye-icon';
import { toast } from 'react-toastify';

export const ProductCard = ({ img, title, id, price }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const likedProducts = useSelector(state => state.liked.likedProducts);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        setIsAddedToCart(cartItems.some(item => item.id === id));
        setIsLiked(likedProducts.includes(id));
    }, [cartItems, id, likedProducts]);

    const handleAddToCart = () => {
        dispatch(addToCart({ id, title, price, img, quantity: 1 }));
    };

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(id));
    };

    const handleToggleLike = () => {
        if (isLiked) {
            dispatch(removeFromLiked(id));
        } else {
            dispatch(addToLiked(id, title, price));

        }
    };

    const handleButtonClick = () => {
        if (!isAddedToCart) {
            handleAddToCart();
            toast.success("Product added to cart!")
        } else {
            handleRemoveFromCart();
        }
    };

    return (
        <div className='w-[214px] relative group border-[0.5px] shadow-sm p-3 rounded-xl '>
            <Link to={`/products/${id}`}>
                <div className='w-[165px]'>
                    <div className='w-[165px] mb-[14px] h-[165px] overflow-hidden flex items-center justify-center'>
                        <img className='object-cover object-center transition-all duration-700 group-hover:scale-[0.9]' src={img} alt="Product image" />
                    </div>
                    <div className='w-[157px] mb-[28px] h-[72px]'>
                        <h3 className='text-[#333] text-[16px]  '>{title}</h3>
                    </div>
                </div>
            </Link>
            <div className='flex items-center justify-between'>
                <p className='text-[18px] text-[#333] font-semibold'>
                    {price} Сум
                </p>
                {isAddedToCart ? (
                    <Link to='/cart'>
                        <button className='p-[7px] rounded-lg bg-[#3DBFFE] text-[#fff] '>
                            <EyeIcon />
                        </button>
                    </Link>
                ) : (
                    <button onClick={handleButtonClick} className='p-[7px] rounded-lg bg-[#3DBFFE] text-[#fff]'>
                        <CartIcon />
                    </button>
                )}
                <button onClick={handleToggleLike} className='absolute z-20 top-4 right-4'>
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
            </div>
        </div>
    );
};

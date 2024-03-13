import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import bgImg from '../../assets/images/not.jpg';

const Favourite = () => {
    const likedProducts = useSelector(state => state.liked.likedProducts);

    return (
        <div className='mt-[140px] max-sm:mt-[155px]'>
            <section>
                <div className="container">
                    <div className='py-3 flex z-50 gap-[2px] items-center'>
                        <div className='text-[#333]'>
                            <NavLink to='/'>
                                <p>Главная</p>
                            </NavLink>
                        </div>
                        /
                        <div className='text-[#333] font-medium'>
                            <Link to='/favourite'>
                                Избранное
                            </Link>
                        </div>
                    </div>
                    {likedProducts.length === 0 ? (
                        <div className='flex flex-col items-center justify-center'>
                            <h2 className="text-[20px] text-center text-[#333]">Нет продуктов...</h2>
                            <div className='w-[400px] max-sm:w-[200px] flex items-center justify-center'>
                                <img className='' src={bgImg} alt="" />
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-5 gap-4">
                            {likedProducts?.map(item => (
                                <div key={item.id} className="border p-4">
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};
export default Favourite
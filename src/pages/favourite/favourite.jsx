import React from 'react';
import { useSelector } from 'react-redux'; 
import { Link, NavLink } from 'react-router-dom';

export const Favourite = () => {
    const likedProducts = useSelector(state => state.liked.likedProducts);
    console.log(likedProducts);
  
    return (
        <div className='mt-[140px]'>
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
                    <div className="grid grid-cols-3 gap-4">
                        {likedProducts?.map(product => (
                            <div key={product.id} className="border p-4">
                                <img src={product.img} alt={product.title} />
                                <h2>{product.title}</h2>
                                <p>{product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

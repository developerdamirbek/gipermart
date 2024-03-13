import React from 'react'
import { Link, NavLink } from 'react-router-dom'

 const Profile = () => {
    return (
        <div className='mt-[140px]'>
            <section>
                <div className="container">
                    <div className='py-3 flex gap-[2px] items-center'>
                        <div className='text-[#333]'>
                            <NavLink to='/'>
                                <p>Главная</p>
                            </NavLink>
                        </div>
                        /
                        <div className='text-[#333] font-medium'>
                            <Link>
                                Личный кабинет
                            </Link>
                        </div>
                    </div>
                    <div>
                        
                    </div>

                </div>
            </section>
        </div>
    )
}
export default Profile
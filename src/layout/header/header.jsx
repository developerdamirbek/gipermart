import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon } from '../../assets/icons/phone-icon';
import logo from '../../assets/icons/logo.png';
import { MenuIcon } from '../../assets/icons/menu-icon';
import { SearchIcon } from '../../assets/icons/search-icon';
import { UserIcon } from '../../assets/icons/user-icon';
import { HeartIcon } from '../../assets/icons/heart-icon';
import { CartIcon } from '../../assets/icons/cart-icon';
import { CloseIcon } from '../../assets/icons/close-icon';
import { Modal } from '../../components/ui/modal';
import { useModal } from '../../hooks/useModal';
import { loadState } from '../../lib/storage';
import { Login } from '../../components/auth/login';
import { Register } from '../../components/auth/register';
import { useLocation } from 'react-router-dom';
import { Catalog } from './components/catalog/catalog';
import { Popover } from '@headlessui/react';
import { useOutsideClick } from '../../hooks/useOutSideClick';
import { useGetAll } from './service/query/useGetAll';
import useDebounce from '../../hooks/useDebounce';
import { useSelector } from 'react-redux';

export const Header = () => {
    const { isOpen, close, open } = useModal();
    const { isOpen: isOpen2, toggle } = useModal();
    const user = loadState("user");

    const location = useLocation();

    const [value, setValue] = useState('');
    const search = useDebounce(value);
    const { data, isLoading, isError } = useGetAll(search);
    const [focus, setFocus] = useState(false);
    const popoverRef = useRef(null);
    const [isCatalogOpen, setIsCatalogOpen] = useState(false);

    const handleCatalogClick = () => {
        setIsCatalogOpen(!isCatalogOpen);
    };

    const handleCloseCatalog = () => {
        setIsCatalogOpen(false);
    };

    useOutsideClick(popoverRef, handleCloseCatalog);

    useEffect(() => {
        setIsCatalogOpen(false);
    }, [location.pathname]);

    const cartItems = useSelector(state => state.cart.cartItems);
    const cartItemCount = cartItems.length;

    return (
        <header className='border-b-2 z-[50] bg-white fixed top-0 left-0 right-0 shadow-sm '>
            <div className=' max-sm:hidden py-2 bg-[#FCFCFC] '>
                <div className="container">
                    <div className='flex items-center justify-end gap-6'>
                        <div className='hover:text-[#36B7F7] text-black  transition-all duration-300'>
                            <Link>
                                Доставка и оплата
                            </Link>
                        </div>
                        <div className='hover:text-[#36B7F7] text-black  transition-all duration-300'>
                            <Link>
                                Пункты выдачи
                            </Link>
                        </div>
                        <div className='hover:text-[#36B7F7] text-black transition-all duration-300'>
                            <Link>
                                Поддержка
                            </Link>
                        </div>
                        <div className='hover:text-[#36B7F7] text-black  transition-all duration-300'>
                            <a className='flex items-center gap-4' href="tel:+998332000607">
                                <PhoneIcon />
                                +998 33 200 06 07
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-4'>
                <div className="container">
                    <div className='flex relative sm:gap-2 md:gap-8 max-sm:hidden  gap-8 items-center justify-between'>
                        <div className='flex items-center sm:gap-2 md:gap-5 gap-[57px]'>
                            <div className='w-[130px] sm:w-[110px] flex items-center justify-center'>
                                <Link to="/">
                                    <img className='w-[120px]' src={logo} alt="" />
                                </Link>
                            </div>
                            <div >
                                <Popover className="relative w-[100%]">
                                    <Popover.Button ref={popoverRef}>
                                        <div data-headlessui-state="open" className='group'>
                                            <button className='flex text-black group-hover:text-[#299efe] transition-all duration-300 text-[20px] items-center gap-3 py-[12px] px-3 pr-[45px] sm:pr-2 md:pr-[45px] rounded-xl border-2 group-hover:border-[#299efe]' onClick={handleCatalogClick}>
                                                <div className='group-hover:text-[#299efe]  transition-all w-8 duration-300 flex items-center text-gray-800 '>
                                                    {isCatalogOpen ? <CloseIcon /> : <MenuIcon />}
                                                </div>
                                                <div className='md:block sm:hidden'>
                                                    Каталог
                                                </div>
                                            </button>
                                        </div>
                                    </Popover.Button>

                                    <Popover.Panel data-headlessui-state="open" className="absolute z-10 w-[1100px]">
                                        <Catalog />
                                    </Popover.Panel>
                                </Popover>

                            </div>
                        </div>
                        <form className='max-w-[673] w-[100%] relative' onSubmit={(e) => e.preventDefault()}>
                            <input
                                className={`border-2   text-black outline-none bg-transparent w-[100%] rounded-xl focus:border-[#299efe] text-[16px] p-4 ${focus ? 'opacity-110' : 'z-50'}`}
                                placeholder='Поиск'
                                type="text"
                                name="search"
                                onBlur={() => setFocus(false)}
                                onFocus={() => setFocus(true)}
                                id="search"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <div className='absolute right-4 top-[50%] translate-y-[-50%]'>
                                <SearchIcon />
                            </div>

                            {value.length >= 2 ? <>
                                <div className={`fixed  p-3 rounded-xl shadow-lg flex flex-col max-w-[100%] right-[20%] left-[20%] bg-white border-[0.5px]  max-h-[400px] overflow-y-auto z-[1000] top-[130px]`}>
                                    {data?.map((item) => (
                                        <Link  key={item.id} to={`/products/${item.id}`}>
                                            <div className='border-b hover:bg-slate-100'>
                                                <div className='flex items-center gap-3'>
                                                    <div className='w-[90px] overflow-hidden'>
                                                        <img className='object-cover object-center' src={item.img} alt="" />
                                                    </div>
                                                    <h3>{item.title}</h3>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                    {data?.length === 0 && <h2>Product Not Found</h2>}
                                </div>
                            </> : ''}
                        </form>

                        <div className='flex items-center sm:gap-2 md:gap-8 gap-8'>
                            <Modal isOpen={isOpen} close={close}>
                                {!isOpen2 ? (
                                    <Login close={close} />
                                ) : (
                                    <Register changeModal={toggle} closeModal={close} />
                                )}

                                <button className=" text-[#299efe] w-[100%]" onClick={toggle}>
                                    {!isOpen2 ? "Create Account" : "Already Have an Account"}
                                </button>
                            </Modal>
                            {!user ? (
                                <button onClick={open} className='flex text-black hover:text-[#299efe] transition-all duration-300 flex-col items-center justify-center'>
                                    <UserIcon />
                                    Войти
                                </button>
                            ) : (
                                <Link to="/profile">
                                    <div className='flex text-black hover:text-[#299efe] transition-all duration-300 flex-col items-center justify-center'>
                                        <UserIcon />
                                        Профиль
                                    </div>
                                </Link>
                            )}
                            <Link to='/favourite'>
                                <div className='flex text-black hover:text-[#299efe] transition-all duration-300 flex-col items-center justify-center'>
                                    <HeartIcon />
                                    Избранное
                                </div>
                            </Link>
                            <Link to='/cart'>
                                <div className='flex relative text-black hover:text-[#299efe] transition-all duration-300 flex-col items-center justify-center'>
                                    <CartIcon />
                                    Корзина
                                    <span className=' absolute w-4 h-4 top-[-4px] right-2 rounded-full bg-[#EB133D] text-white flex items-center justify-center text-[12px] '>
                                    {cartItemCount}
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container ">
                    <div className='relative sm:hidden'>
                        <div className='flex py-2 items-center justify-between'>
                            <div className=' text-black '>
                                {!user ? (
                                    <button onClick={open}>
                                        <UserIcon />
                                    </button>
                                ) : (
                                    <Link to='/profile'>
                                        <UserIcon />
                                    </Link>
                                )}

                            </div>
                            <div className='w-[100px] mr-[-40px] flex items-center justify-center'>
                                <Link to="/">
                                    <img className='w-[90px]' src={logo} alt="" />
                                </Link>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='  text-black'>
                                    <Link to='/favourite'>
                                        <HeartIcon />
                                    </Link>
                                </div>
                                <div className='  text-black'>
                                    <Link to='/cart'>
                                        <CartIcon />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center mb-2 gap-1'>
                            <Popover className="relative">
                                <Popover.Button ref={popoverRef}>
                                    <div data-headlessui-state="open" className='group'>
                                        <button className='flex text-black group-hover:text-[#299efe] transition-all duration-300 text-[20px] items-center gap-2 py-[12px] px-3  rounded-xl border-2 group-hover:border-[#299efe]' onClick={handleCatalogClick}>
                                            <div className='group-hover:text-[#299efe]  transition-all w-8 duration-300 flex items-center text-gray-800 '>
                                                {isCatalogOpen ? <CloseIcon /> : <MenuIcon />}
                                            </div>
                                        </button>
                                    </div>
                                </Popover.Button>

                                <Popover.Panel data-headlessui-state="open" className="fixed bg-white border rounded-md right-5 left-5 z-10 ">
                                    <Catalog />
                                </Popover.Panel>
                            </Popover>

                            <form className='max-w-[673] w-[100%] relative' onSubmit={(e) => e.preventDefault()}>
                                <input className='border-2  text-black outline-none bg-transparent w-[100%]  focus:border-[#299efe] text-[16px] p-[10px] rounded-md' placeholder='Поиск'
                                    type="text"
                                    name="search"
                                    id="search"
                                    onBlur={() => setFocus(false)}
                                    onFocus={() => setFocus(true)}
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)} />
                                <div className='absolute right-4 top-[50%] translate-y-[-50%]'>
                                    <SearchIcon />
                                </div>
                                {value.length >= 2 ? <>
                                    <div className={`fixed left-10 right-10 p-3 rounded-xl shadow-lg flex flex-col bg-white border-[0.5px]  max-h-[400px] overflow-y-auto z-[1000] top-[135px]`}>
                                        {data?.map((item) => (
                                            <Link to={`/products/${item.id}`}>
                                                <div className='border-b hover:bg-slate-100'>
                                                    <div className='flex p-3 items-center gap-3'>
                                                        <div className='w-[40px] overflow-hidden'>
                                                            <img className='object-cover object-center' src={item.img} alt="" />
                                                        </div>
                                                        <h3 className='text-[12px]'>{item.title.slice(0, 25)}</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                        {data?.length === 0 && <h2>Product Not Found</h2>}
                                    </div>
                                </> : ''}
                            </form>
               
                    </div>

                </div>
            </div>
        </div>
        </header >
    );
};






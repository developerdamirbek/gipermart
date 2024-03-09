import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icons/logo.png'
import { FacebookIcon } from '../../assets/icons/facebook-icon'
import { OkIcon } from '../../assets/icons/ok-icon'
import { InstagramIcon } from '../../assets/icons/instagram-icon'
import { YoutubeIcon } from '../../assets/icons/youtube-icon'
import { VkIcon } from '../../assets/icons/vk-icon'
import { faqs } from './components/faqs'
import { FaqAccordion } from './components/faq-accordion'

export const Footer = () => {
  return (
    <footer className='bg-[#F5F5F6] mt-[70px] py-6'>
      <div className="container">
        <div className='w-[190px] flex items-center justify-center'>
          <Link className='mb-4 w-[128px]'>
            <img src={logo} alt="Gipermart logo" />
          </Link>
        </div>
        <a className=' text-[#333] text-[14px] font-medium mb-2 ' href="tel:+998332000607">
          +99 833 200-06-07
        </a>
        <p className=' text-[#333] text-[12px] mb-4 '>
          справочная служба
        </p>
        <a className=' text-[#333] text-[14px] font-medium mb-2 ' href="tel:+998332000607">
          +99 833 200-06-07
        </a>
        <p className=' text-[#333] text-[12px] mb-3 '>
          интернет-магазин
        </p>
        <p className=' text-[#333] font-semibold text-[12px] mb-4 '>
          Оставайтесь на связи
        </p>
        <div className='flex items-center gap-4 mb-6'>
          <a href="">
            <FacebookIcon />
          </a>
          <a href="">
            <OkIcon />
          </a>
          <a href="">
            <VkIcon />
          </a>
          <a href="">
            <YoutubeIcon />
          </a>
          <a href="">
            <InstagramIcon />
          </a>
        </div>
        <div className="">
          <FaqAccordion faqs={faqs} />
        </div>
      </div>
    </footer>
  )
}

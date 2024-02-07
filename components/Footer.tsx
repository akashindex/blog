import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='pt-[3rem] pb-[3rem] bg-gray-800'>
        <div className="w-[80%] border-b-[1.2px] pb-[2rem] border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[3rem]">
            <div>
                <h1 className="text-[25px] uppercase text-white mb-[1rem]"></h1>
                <p className='text-[14px] text-white opacity-60'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sequi ex laborum eveniet corrupti architecto saepe rerum, laboriosam blanditiis iusto possimus aliquid dolorum fugiat at, officiis maxime excepturi aut consequatur!
                    Dignissimos dolorem odit incidunt quibusdam est. Expedita odio vel eveniet dignissimos deleniti, at, recusandae ab qui reiciendis ad numquam iusto atque consequatur perferendis quisquam! Asperiores consequatur illo natus eum odit!
                </p>
                <p className='text-[14px] mt-[1.4rem] text-white opacity-80'>(+000) 1234 5678 90 -infoAexample.com</p>
            </div>
            <div className='lg:mx-auto'>
                <h1 className='text-[20px] text-white mb-[1.5rem]'>Information</h1>
                <p className='footer__link'>About Us</p>
                <p className='footer__link'>Privacy Policy</p>
                <p className='footer__link'>Return Policy</p>
                <p className='footer__link'>Shpping police</p>
                <p className='footer__link'>Dropshipping</p>
            </div>
            <div className='lg:mx-auto'>
                <h1 className='text-[20px] text-white mb-[1.5rem]'>Account</h1>
                <p className='footer__link'>Dashboard</p>
                <p className='footer__link'>My Orders</p>
                <p className='footer__link'>Account Details</p>
                <p className='footer__link'>Track My Orders</p>
            </div>
            <div className='lg:mx-auto'>
                <h1 className='text-[20px] text-white mb-[1.5rem]'>Shop</h1>
                <p className='footer__link'>Affiliate</p>
                <p className='footer__link'>Best Sellers</p>
                <p className='footer__link'>Latest Products</p>
                <p className='footer__link'>Sale Products</p>
            </div>
        </div>
        <div className='mt-[2rem] grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2 justify-between w-[80%] mx-auto'>
            <p className='text-[14px] text-white opacity-60'>&#169; Copyright webdevwarriors 2024</p>
            <Image src="/images/pay.svg" alt='pay' width={230} height={230} className='object-contain sm:ml-auto'/>
        </div>
    </div>
  )
}

export default Footer
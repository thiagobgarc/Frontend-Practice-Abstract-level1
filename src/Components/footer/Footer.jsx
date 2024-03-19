import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-center justify-start bg-black mx-[-22rem] lg:mx-[-22rem] sm:mx-[-2rem] py-7'>
    <div className='grid lg:grid-cols-4 md:grid-cols-2 items-start justify-start bg-black mx-[-22rem] lg:mx-[-22rem] sm:mx-[-2rem] py-7 lg:gap-[5rem] md:gap-[5rem] lg:pr-[35rem]'>
        <div className=' text-white p-2 '>
            <p className='font-bold text-white p-2 hover:text-gray-500 text-3xl lg:text-2xl'>
                Abstract
            </p>
            <p>
                Start Trial
            </p>
            <p>
                Pricing
            </p>
            <p>
                Download
            </p>            
        </div>

        <div className=' text-white p-2 '>
            <p className='font-bold text-white p-2 hover:text-gray-500 text-3xl lg:text-2xl'>
                Resources
            </p>
            <p>
                Blog
            </p>
            <p>
                Help Center
            </p>
            <p>
                Release Notes
            </p>
            <p>
                Status
            </p>
        </div>

        <div className=' text-white p-2 '>
            <p className='font-bold text-white p-2 hover:text-gray-500 text-3xl lg:text-2xl'>
                Community
            </p>
            <p>
                Twitter
            </p>
            <p>
                LinkedIn
            </p>
            <p>
                Facebook
            </p>
            <p>
                Dripple
            </p>
            <p>
                Podcast
            </p>
        </div>

        <div className=' text-white p-2'>
            <p className='font-bold text-white p-2 hover:text-gray-500 text-3xl lg:text-2xl'>
                Company
            </p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Legal</p>
        </div>
    </div>

    <div className='grid-cols-2 items-center justify-center lg:ml-[10rem] lg:mt-[-4rem]'>
        <p className='text-white p-2 font-semibold text-xl lg:text-2xl'>
            Contact Us
        </p>
        <p className='text-white'>
            info@abstract.com
        </p>
    </div>

    <div className='flex flex-col items-start text-white p-2 text-xl lg:text-2xl lg:ml-[80rem] md: ml-[33rem]'>
        <p className=''>
        © Copyright 2023
        </p>
        <p>
        Abstract Studio Design, Inc.
        </p>
        <p>
        All rights reserved
        </p>
    </div>

    </div>
  )
}

export default Footer
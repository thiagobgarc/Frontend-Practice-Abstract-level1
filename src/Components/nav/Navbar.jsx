import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-2 bg-black  mx-[-22rem] lg:mx-[-22rem] sm:mx-[-2rem] py-5 md:py-4 mt-[-2rem]'>
        <div className='flex ml-[5rem]'>
            <p className='font-bold text-white p-2 hover:text-gray-500 text-xl lg:text-2xl'>
                Abstract
            </p>
        </div>
        <div className='flex text-white p-2 text-xl lg:text-2xl'>
            |
        </div>
        <div className='flex hover:underline text-white p-2 text-xl lg:text-2xl'>
            Help Center
        </div>

        <div className='flex items-end justify-end flex-1 space-x-4'>
            <div>
                <button className='text-white border border-white rounded-md p-2 text-xl lg:text-2xl hover:text-black hover:bg-white'>
                    Submit a request
                </button>
            </div>
            <div>
                <button className='text-white p-2 px-4 mr-[5rem] rounded-md text-xl lg:text-2xl  bg-[#4C5FD5]'>
                    Sign in
                </button>
            </div>
        </div>
    </div>

  )
}

export default Navbar
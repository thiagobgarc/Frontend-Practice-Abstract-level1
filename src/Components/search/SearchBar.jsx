import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex flex-col bg-[#dadbf1] p-[8rem] lg:mx-[-22rem] md:mx-[-2rem]'>
        <div>
            <p className='text-black font-serif lg:text-7xl md:text-6xl'>
                How can we help?
            </p>
        </div>

        <div className='mt-10'>
        <input
          type="text"
          placeholder='Search...'
          className=' bg-white rounded-md border-2 border-black py-4  text-xl pl-4 lg:pr-[40rem] md:pr-[26rem] '
        />
        </div>
    </div>
  )
}

export default SearchBar
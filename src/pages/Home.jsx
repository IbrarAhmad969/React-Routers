import React from 'react'
import LaptopImage from '../assets/laptop.jpg'

const Home = () => {
  return (
    <div className='bg-gray w-full h-screen flex md:flex-row justify-between items-center' >

        <div className='flex flex-col justify-evenly pl-15  md:w-[50%] gap-y-6' >
            <p className='text-gray-500 space-x-0.5 text-sm sm:text-base'>FREE 30 DAYS TRIAL</p>
            <h1 className='font-black text-black text-xl sm:text-2xl lg:text-4xl'>The best way to showcase Your project</h1>
            <p className='text-gray-500 text-sm sm:text-base'>Here you can put a short description about your project</p>

            <div className='flex flex-col sm:flex-row gap-4 mt-4'>
                <button className='bg-blue-600 text-white rounded-[5px] p-2 cursor-pointer transition-colors hover:bg-purple-500'>Try for Free</button>
                <button className='text-black border border-black rounded-[5px] bg-white p-2 cursor-pointer transition-colors hover:bg-green-400 hover:text-white'>See how it works</button>
            </div>
        </div>

        <div className='w-[50%] h-full flex'>
            <img src={LaptopImage} alt="image-not-found" className='w-full h-[400px] object-cover rounded-lg my-auto mr-3.5' />
        </div>
      
    </div>
  )
}

export default Home

import React from 'react'
import { CloudUploadIcon, DatabaseIcon, PaperAirplaneIcon, ServerIcon } from '@heroicons/react/outline'
import CyberBg from '../assets/cyber-bg.png'



const HeroBanner = () => {
    return (
        <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            {/* container */}
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>

                {/* header content */}
                <div className='flex flex-col justify-center items-center md:items-start w-full px-2 py-8 mt-4'>
                    <p className='text-2xl '>Uniqe Sequencing & Production</p>
                    <h1 className='py-3 text-3xl md:text-5xl font-medium'>Cloud Management</h1>
                    <p className='text-2xl'>This is our Tech Brand</p>
                    <button className='py-2 w-[70%] mt-4 sm:w-[60%]'>Get Started</button>
                </div>

                {/* image container */}
                <div className='mt-4'>
                    <img src={CyberBg} alt="/" />
                </div>

                {/* info section */}
                <div className=' absolute flex flex-col py-8 md:min-w-[760px] bottom-[3%] md:left-1/2 mx-1 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 text-center rounded-xl shadow-xl '>
                    <p className='mb-2-'>Data Services</p>
                    {/* icons */}
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-4 items-center py-2 text-slate-500'><CloudUploadIcon className='h-4 mr-2 text-indigo-600'/> App security</p>
                        <p className='flex px-4 items-center py-2 text-slate-500'><DatabaseIcon className='h-4 mr-2 text-indigo-600'/>Dashboard Design</p>
                        <p className='flex px-4 items-center py-2 text-slate-500'><ServerIcon className='h-4 mr-2 text-indigo-600'/> Cloud Data</p>
                        <p className='flex px-4 items-center py-2 text-slate-500'><PaperAirplaneIcon className='h-4 mr-2 text-indigo-600'/> API</p>
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default HeroBanner
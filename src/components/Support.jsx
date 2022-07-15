import React from 'react'
import support from '../assets/support.jpg'
import { PhoneIcon, ArrowSmRightIcon, } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'




const Support = () => {
    return (
        // outer div
        <div className='w-full h-screen mt-24'>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='w-full h-full object-cover mix-blend-overlay' src={support} alt="/" />
            </div>

            {/*container*/}
            <div className='max-w-[1240px] mx-auto text-white relative'>

                {/* content */}
                <div className='px-4 py-12 text-center'>
                    <h2 className='pt-8 text-slate-300 text-5xl uppercase font-medium'>Support</h2>
                    <h3 className='text-5xl py-6 font-bold'>Finding the right team</h3>
                    <p className='text-xl py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem vero blanditiis dicta?<br /> Explicabo ullam, labore, provident, aut dicta veritatis natus fugiat facere molestiae<br /> atque ipsa qui delectus commodi ut non.</p>
                </div>

                {/* boxes */}
                <div className='grid lg:grid-cols-3 gap-x-8 relative gap-y-12 px-4 pt-12 sm:pt-20 text-black '>

                    {/* box */}
                    <div className='rounded-xl bg-zinc-200 shadow-xl mt-6'>
                        <div className=' bg-indigo-600 text-white w-[65px]
                         h-[60px] ml-5 mt-[-28px] rounded-xl flex 
                         items-center justify-center' ><PhoneIcon className='h-10' />
                        </div>
                        <div className='px-6 py-6'>
                            <h3 className='py-2 text-indigo-600 font-medium text-2xl'>Sales</h3>
                            <p>Lorem ipsum dolor sit amet consectetur,
                             adipisicing elit. Sed quasi repudiandae,dignissimos quisquam ducimus in.</p>
                        </div>
                        <div className='flex rounded-b-xl py-4 px-4
                         bg-zinc-300 items-center font-medium text-indigo-600'>Contact Us <ArrowSmRightIcon className='h-5 text-indigo-500 ml-1 mt-1' /></div>
                    </div>

                    <div className='rounded-xl bg-zinc-200 shadow-xl mt-6'>
                        <div className=' bg-indigo-600 text-white w-[65px]
                         h-[60px] ml-5 mt-[-28px] rounded-xl flex 
                         items-center justify-center' ><SupportIcon className='h-10' />
                        </div>
                        <div className='px-6 py-6'>
                            <h3 className='py-2 text-indigo-600 font-medium text-2xl'>Technical Support</h3>
                            <p>Lorem ipsum dolor sit amet consectetur,
                             adipisicing elit. Sed quasi repudiandae,dignissimos quisquam ducimus in.</p>
                        </div>
                        <div className='flex rounded-b-xl py-4 px-4
                         bg-zinc-300 items-center font-medium text-indigo-600'>Contact Us <ArrowSmRightIcon className='h-5 text-indigo-500 ml-1 mt-1' /></div>
                    </div>

                    <div className='rounded-xl bg-zinc-200 shadow-xl mt-6'>
                        <div className=' bg-indigo-600 text-white w-[65px]
                         h-[60px] ml-5 mt-[-28px] rounded-xl flex 
                         items-center justify-center' ><ChipIcon className='h-10' />
                        </div>
                        <div className='px-6 py-6'>
                            <h3 className='py-2 text-indigo-600 font-medium text-2xl'>Media Inquiries</h3>
                            <p>Lorem ipsum dolor sit amet consectetur,
                             adipisicing elit. Sed quasi repudiandae,dignissimos quisquam ducimus in.</p>
                        </div>
                        <div className='flex rounded-b-xl py-4 px-4
                         bg-zinc-300 items-center font-medium text-indigo-600'>Contact Us <ArrowSmRightIcon className='h-5 text-indigo-500 ml-1 mt-1' /></div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Support
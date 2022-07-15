import React from 'react'

const AboutSection = () => {
    return (
        // outer div
        <div className='w-full my-32'>
            {/* container */}
            <div className='max-w-[1240px] mx-auto'>

                <div className='text-center'>
                    <h2 className='text-5xl font-bold py-3'>Trusted by developers across the world</h2>
                    <p className='text-2xl py-6 text-gray-600 md:px-32'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Porro facilis itaque laboriosam ex fuga, doloremque nihil voluptas velit ducimus corrupti.</p>
                </div>

                {/* boxes */}
                <div className='grid md:grid-cols-3 gap-3 px-2 text-center mt-10'>
                    {/* box */}
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='font-bold text-indigo-600 text-5xl'>100%</p>
                        <p className='text-xl py-6 text-gray-600'>Completion</p>
                    </div>

                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='font-bold text-indigo-600 text-5xl'>24/7</p>
                        <p className='text-xl py-6 text-gray-600 '>Delivery</p>
                    </div>

                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='font-bold text-indigo-600 text-5xl'>100K</p>
                        <p className='text-xl py-6 text-gray-600 '>TransActions</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AboutSection
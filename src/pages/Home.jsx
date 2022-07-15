import React from 'react'
import HeroBanner from './../components/HeroBanner';
import AboutSection from './../components/AboutSection';
import Support from '../components/Support';


const Home = () => {
  return (
    <div className='w-full'>
      <HeroBanner />
      <AboutSection/>
      <Support/>
    </div>
  )
}

export default Home
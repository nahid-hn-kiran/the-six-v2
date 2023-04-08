import React from 'react'
import FeaturedSlider from './FeatredSlilder/FeaturedSlider'
import HeroSlider from './HeroSlider/HeroSlider'
import News from './News/News'
import ScheduleSlider from './ScheduleSlider/ScheduleSlider'
import Sidebar from './Sidebar/Sidebar'

const Home = () => {
  return (
    <>
      <HeroSlider />
      <ScheduleSlider />
      <section className='grid grid-cols-1 lg:grid-cols-3 container p-5 gap-5'>
        <div className='lg:col-span-2 border'>
          <div className='border-t-8 border-indigo-700'>
            <h2 className='text-2xl my-3 ml-2'>Featured News</h2>
            <>
              <FeaturedSlider />
              <News />
            </>
          </div>
        </div>
        <div>
          <Sidebar />
        </div>
      </section>
    </>
  )
}

export default Home

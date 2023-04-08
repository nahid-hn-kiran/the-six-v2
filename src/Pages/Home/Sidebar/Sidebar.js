import React from 'react'
import Newsletter from '../../../components/Newsletter/Newsletter'
import PopularPosts from '../../../components/PopularPosts/PopularPosts'
import LaLigaTable from './LaLigaTable/LaLigaTable'
import PremierLeagueTable from './PremierLeagueTable/PremierLeagueTable'
import SerieATable from './SerieAATable/SerieATable'
import UpcomingMatches from './UpcomingMatches/UpcomingMatches'

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-8'>
      <LaLigaTable />
      <PopularPosts />
      <PremierLeagueTable />
      <>
        <img
          src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/11/add_banner2.jpg'
          alt='Sidebar-ad'
        />
      </>
      <UpcomingMatches />
      <Newsletter />
      <>
        <img
          src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2017/03/banner-blue.jpg'
          alt='sidebar-ad'
        />
      </>
      <SerieATable />
    </div>
  )
}

export default Sidebar

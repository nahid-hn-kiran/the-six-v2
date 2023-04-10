import React, { useEffect } from 'react'
import FeaturedSlider from './FeatredSlilder/FeaturedSlider'
import HeroSlider from './HeroSlider/HeroSlider'
import News from './News/News'
import ScheduleSlider from './ScheduleSlider/ScheduleSlider'
import Sidebar from './Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/Loading/Loading'
import {
  getEightArticles,
  getFeaturedArticles,
  getFirstTwoArticle,
  getTwoArticleBottom,
} from '../../redux/actionCreators/articleActions'
import { getHeroslider } from '../../redux/actionCreators/sliderActions'
import { getUpcomingMatches } from '../../redux/actionCreators/upcomingMatchesActions'

const Home = () => {
  const dispatch = useDispatch()

  const {
    loading: heroSliderLoading,
    data: heroSlider,
    message: heroSliderMessage,
  } = useSelector((state) => state.heroSlider)
  useEffect(() => {
    dispatch(getHeroslider())
  }, [dispatch])

  const {
    loading: scheduleLoading,
    data: scheduleData,
    message: scheduleMessage,
  } = useSelector((state) => state.upcomingMatches)
  useEffect(() => {
    dispatch(getUpcomingMatches())
  }, [dispatch])

  const { loading: articlLoading, data: articles } = useSelector(
    (state) => state.featuredArticles
  )

  useEffect(() => {
    dispatch(getFeaturedArticles())
  }, [dispatch])

  const { loading: firstTwoArticleLoading, data: firstTwoArticle } =
    useSelector((state) => state.firstTwoArticle)
  const { loading: bottomTwoArticleLoading, data: bottomTwoData } = useSelector(
    (state) => state.twoArticleBottom
  )
  const { loading: eightArticleLoading, data: eightData } = useSelector(
    (state) => state.eightArticles
  )
  useEffect(() => {
    dispatch(getFirstTwoArticle())
    dispatch(getEightArticles())
    dispatch(getTwoArticleBottom())
  }, [dispatch])

  if (
    articlLoading ||
    firstTwoArticleLoading ||
    bottomTwoArticleLoading ||
    eightArticleLoading ||
    heroSliderLoading ||
    scheduleLoading
  ) {
    return <Loading />
  }
  return (
    <div>
      <HeroSlider data={heroSlider} message={heroSliderMessage} />
      <section className='grid grid-cols-1 lg:grid-cols-3 container my-5 gap-5'>
        <div className='lg:col-span-2'>
          <div className='border-t-8 border-indigo-700'>
            <h2 className='text-2xl my-3 ml-2'>Featured News</h2>
            <>
              <FeaturedSlider data={articles} />
              <News
                data={firstTwoArticle}
                bottomTwoData={bottomTwoData}
                eightData={eightData}
              />
            </>
          </div>
        </div>
        <div>
          <Sidebar />
        </div>
      </section>
    </div>
  )
}

export default Home

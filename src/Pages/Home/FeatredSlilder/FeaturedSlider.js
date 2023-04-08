import React, { useEffect } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { useDispatch, useSelector } from 'react-redux'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper'
import { getFeaturedArticles } from '../../../redux/actionCreators/articleActions'
import { Link } from 'react-router-dom'

const FeaturedSlider = () => {
  const dispatch = useDispatch()
  const { loading, data } = useSelector((state) => state.featuredArticles)
  useEffect(() => {
    dispatch(getFeaturedArticles())
  }, [dispatch])
  const getDate = (iso) => {
    const date = new Date(iso)
    const longDate = date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    return longDate
  }
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {data?.data?.map((article) => (
          <SwiperSlide
            key={article._id}
            className='relative'
            style={{ maxHeight: '400px' }}
          >
            <Link to={`/article/${article?._id}`}>
              <img
                src={article?.thumbnail}
                alt={article.title}
                className='w-full'
              />
            </Link>
            <div className='flex flex-col gap-4 text-white absolute bottom-2 left-5'>
              <Link
                to={`/article/${article?._id}`}
                className='slider-title text-lg lg:text-3xl font-semibold lg:font-bold'
              >
                {article.title}
              </Link>
              <p className='text-xs'>{getDate(article.createdAt)}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default FeaturedSlider

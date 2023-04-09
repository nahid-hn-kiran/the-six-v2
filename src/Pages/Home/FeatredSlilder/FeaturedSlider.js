import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Autoplay, Pagination } from 'swiper'
import { Link } from 'react-router-dom'
import GetDate from '../../../components/DateTime/GetDate'

const FeaturedSlider = ({ data }) => {
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
                className='slider-title text-blue-400 text-lg lg:text-3xl font-semibold lg:font-bold'
              >
                {article.title}
              </Link>
              <p className='text-xs'>{GetDate(article.createdAt)}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default FeaturedSlider

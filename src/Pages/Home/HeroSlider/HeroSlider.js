import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Keyboard, Autoplay } from 'swiper'
import { getHeroslider } from '../../../redux/actionCreators/sliderActions'
import Loading from '../../../components/Loading/Loading'

const HeroSlider = () => {
  const dispatch = useDispatch()
  const { loading, data, message } = useSelector((state) => state.heroSlider)
  useEffect(() => {
    dispatch(getHeroslider())
  }, [dispatch])
  if (loading) {
    return <Loading />
  }
  return (
    <section>
      {message && (
        <p className='text-center text-2xl text-red-600'>
          Sorry something went wrong!
        </p>
      )}
      <Swiper
        navigation={true}
        modules={[Navigation, Keyboard, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        keyboard={{
          enabled: true,
        }}
        className='mySwiper'
      >
        {data?.data?.map((slider) => (
          <SwiperSlide
            key={slider._id}
            className='relative w-full'
            style={{ maxHeight: '500px' }}
          >
            <Link to={`/article/${slider?._id}`}>
              <img
                src={`${slider?.thumbnail}`}
                alt={slider?.title}
                className='w-full h-full opacity-60'
              />
            </Link>
            <div className='md:flex hidden flex-col gap-4 text-white absolute justify-center items-center top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
              <h2 className='slider-title text-black text-4xl font-bold'>
                {slider?.title}
              </h2>
              <p className='text-black'>
                {slider?.length > 15 ? slider?.content + '..' : slider?.content}
              </p>
              <Link to={slider?.postUrl} className='btn btn-primary'>
                More Info
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSlider

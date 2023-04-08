import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useDispatch, useSelector } from 'react-redux'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import { getUpcomingMatches } from '../../../redux/actionCreators/upcomingMatchesActions'
import Loading from '../../../components/Loading/Loading'
import GetDate from '../../../components/DateTime/GetDate'
import GetTime from '../../../components/DateTime/GetTime'

const ScheduleSlider = () => {
  const dispatch = useDispatch()
  const { loading, data, message } = useSelector(
    (state) => state.upcomingMatches
  )
  useEffect(() => {
    dispatch(getUpcomingMatches())
  }, [dispatch])
  if (loading) {
    return <Loading />
  }
  return (
    <section className='my-5 text-black text-sm'>
      {message && <p className='text-red-600 text-center'>{message}</p>}
      <h2 className='text-xl my-3 ml-8'>Upcoming matches</h2>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: false,
        }}
        loop={true}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1050: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className='mySwiper'
      >
        {data?.data?.map((match, index) => (
          <SwiperSlide key={match._id}>
            <div
              className={`card h-40 ${index % 2 === 0 ? '' : 'bg-slate-400'}`}
            >
              <div className='card-body flex flex-col items-center justify-center gap-2'>
                <p className='card-text text-center flex gap-2'>
                  <span>{GetDate(match.datetime)}</span>{' '}
                  <span>{GetTime(match.datetime)}</span>
                </p>
                <div className='card-actions flex justify-between'>
                  <img
                    className='h-6 max-w-xs'
                    src={`https://tame-pear-vulture-kilt.cyclic.app/${match.team1logo}`}
                    alt={match.team1 + 'vs' + match.team2}
                  />
                  <p>{match.team1}</p>
                  <p>vs</p>
                  <p>{match.team2}</p>
                  <img
                    className='h-6 max-w-xs'
                    src={`https://tame-pear-vulture-kilt.cyclic.app/${match.team2logo}`}
                    alt={match.team1 + 'vs' + match.team2}
                  />
                </div>
                <h2>{match.venue}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ScheduleSlider

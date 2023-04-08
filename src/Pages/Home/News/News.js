import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NewsCard from '../../../components/cards/NewsCard'
import Loading from '../../../components/Loading/Loading'
import {
  getEightArticles,
  getFirstTwoArticle,
  getTwoArticleBottom,
} from '../../../redux/actionCreators/articleActions'

const News = () => {
  const dispatch = useDispatch()
  const { loading, data } = useSelector((state) => state.firstTwoArticle)
  const { loading: bottomTwoArticleLoading, data: bottomTwoData } = useSelector(
    (state) => state.twoArticleBottom
  )
  const { loading: eightLoading, data: eightData } = useSelector(
    (state) => state.eightArticles
  )
  useEffect(() => {
    dispatch(getFirstTwoArticle())
    dispatch(getEightArticles())
    dispatch(getTwoArticleBottom())
  }, [dispatch])
  if (loading || eightLoading || bottomTwoArticleLoading) {
    return <Loading />
  }
  const orderLast = 'order-last'
  return (
    <div className='my-5'>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-6 article-top'>
          {data?.data?.map((article, index) => (
            <NewsCard
              classess='md:grid grid-cols-2 items-center'
              orderClass={`${index % 2 !== 0 && orderLast}`}
              key={article._id}
              article={article}
            />
          ))}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {eightData?.data?.map((article) => (
            <NewsCard key={article._id} article={article} />
          ))}
        </div>
        <div className='flex flex-col gap-6 article-bottom'>
          {bottomTwoData?.data?.map((article, index) => (
            <NewsCard
              classess='md:grid grid-cols-2 items-center'
              orderClass={`${index % 2 !== 0 && orderLast}`}
              key={article._id}
              article={article}
            />
          ))}
        </div>
      </div>
      <div className='flex justify-center my-8'>
        <img
          src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/11/add_banner.jpg'
          alt='Ad'
        />
      </div>
    </div>
  )
}

export default News

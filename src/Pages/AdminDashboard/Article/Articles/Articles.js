import React, { useEffect } from 'react'
import DashboardContentHeader from '../../../../components/DashboardContentHeader/DashboardContentHeader'
import { useDispatch, useSelector } from 'react-redux'
import { getAllArticles } from '../../../../redux/actionCreators/articleActions'
import Loading from '../../../../components/Loading/Loading'
import NewsCard from '../../../../components/cards/NewsCard'

const Articles = () => {
  const dispatch = useDispatch()
  const { loading, data, message } = useSelector((state) => state.allArticles)

  useEffect(() => {
    dispatch(getAllArticles())
  }, [dispatch])
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <DashboardContentHeader
        title='all articles'
        linkTitle='add article'
        link='articles/new-article'
      />
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {message && <p className='text-red-600 text-center m-8'>{message}</p>}
        {data?.data?.map((article) => (
          <NewsCard article={article} key={article._id} />
        ))}
      </section>
    </div>
  )
}

export default Articles

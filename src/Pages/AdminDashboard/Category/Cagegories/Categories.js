import React, { useEffect } from 'react'
import Category from '../../../../components/Category/Category'
import DashboardContentHeader from '../../../../components/DashboardContentHeader/DashboardContentHeader'
import { getCategories } from '../../../../redux/actionCreators/categoryActions'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../../components/Loading/Loading'

const Categories = () => {
  const dispatch = useDispatch()
  const { loading, categories, message } = useSelector(
    (state) => state.getCategories
  )
  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <DashboardContentHeader
        content={categories?.data}
        title='Categories'
        linkTitle='Add category'
        link='add-category'
      />
      <div className='flex flex-wrap gap-2 justify-around'>
        {message && <p className='text-red-600'>{message}</p>}
        {categories?.data?.map((category) => (
          <Category category={category} key={category._id} />
        ))}
      </div>
    </div>
  )
}

export default Categories

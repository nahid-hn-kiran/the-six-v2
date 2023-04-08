import React, { useEffect } from 'react'
import DashboardContentHeader from '../../../../components/DashboardContentHeader/DashboardContentHeader'
import { useDispatch, useSelector } from 'react-redux'
import { getTags } from '../../../../redux/actionCreators/tagActions'
import Loading from '../../../../components/Loading/Loading'
import Category from '../../../../components/Category/Category'

const Tags = () => {
  const dispatch = useDispatch()
  const { loading, tags, message } = useSelector((state) => state.getTags)
  useEffect(() => {
    dispatch(getTags())
  }, [])
  if (loading) {
    return <Loading />
  }
  return (
    <>
      <DashboardContentHeader
        content={tags?.data}
        title='Tags'
        linkTitle='Add tag'
        link='add-tag'
      />
      <div className='flex flex-wrap gap-2 justify-around'>
        {message && <p className='text-red-600'>{message}</p>}
        {tags?.data?.map((tag) => (
          <Category category={tag} key={tag._id} />
        ))}
      </div>
    </>
  )
}

export default Tags

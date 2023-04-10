import React from 'react'
import GetDate from '../DateTime/GetDate'
import { Link } from 'react-router-dom'

const PopularPosts = ({ articles }) => {
  return (
    <div className='border p-4'>
      <div className='border-t-8 border-indigo-700'>
        <h2 className='text-2xl my-3 ml-2'>Popular News</h2>
        <div className='flex flex-col gap-4'>
          {articles?.data?.map((article) => (
            <div className='flex gap-4' key={article._id}>
              <div className='flex gap-3 text-sm'>
                <Link to='/'>
                  <img
                    src={article?.thumbnail}
                    alt={article?.title}
                    className='w-24 h-20'
                  />
                </Link>
              </div>
              <div className='flex flex-col gap-2'>
                <div>
                  <Link to='/' className='font-bold text-blue-600'>
                    {article?.title}
                  </Link>
                </div>
                <p>{GetDate(article?.createdAt)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PopularPosts

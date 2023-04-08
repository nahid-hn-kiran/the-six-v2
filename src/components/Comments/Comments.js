import React from 'react'
import GetDate from '../DateTime/GetDate'
import GetTime from '../DateTime/GetTime'

const Comments = ({ comment }) => {
  return (
    <div className='flex items-center gap-2'>
      <div className='avatar'>
        <div className='w-12 rounded-full'>
          <img src={comment?.author?.imgURL} alt={comment?.author?.name} />
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex gap-6'>
          <div className='flex flex-col gap-1'>
            <p className='text-sm'>{comment?.author?.name}</p>
            <p className='text-xs'>{comment?.comment}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-xs'>{GetTime(comment?.createdAt)}</p>
            <p className='text-xs'>{GetDate(comment?.createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comments

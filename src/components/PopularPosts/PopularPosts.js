import React from 'react'

const PopularPosts = () => {
  return (
    <div className='border p-4'>
      <div className='border-t-8 border-indigo-700'>
        <h2 className='text-2xl my-3 ml-2'>Popular News</h2>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4'>
            <div className='flex gap-3 text-sm'>
              <a href='/'>
                <img
                  src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/11/playingalone-150x150.jpg'
                  alt='the post'
                  className='w-24 h-20'
                />
              </a>
            </div>
            <div className='flex flex-col justify-between'>
              <div>
                <a href='/' className='font-bold'>
                  List of best Soccer trics
                </a>
                <p className='my-1'>Lorem ipsum dolor sit.</p>
              </div>
              <p>November 30 2023</p>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='flex gap-3 text-sm'>
              <a href='/'>
                <img
                  src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/11/playingalone-150x150.jpg'
                  alt='the post'
                  className='w-24 h-20'
                />
              </a>
            </div>
            <div className='flex flex-col justify-between'>
              <div>
                <a href='/' className='font-bold'>
                  List of best Soccer trics
                </a>
                <p className='my-1'>Lorem ipsum dolor sit.</p>
              </div>
              <p>November 30 2023</p>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='flex gap-3 text-sm'>
              <a href='/'>
                <img
                  src='http://kodeforest.net/wp-demo/soccer/wp-content/uploads/2016/11/playingalone-150x150.jpg'
                  alt='the post'
                  className='w-24 h-20'
                />
              </a>
            </div>
            <div className='flex flex-col justify-between'>
              <div>
                <a href='/' className='font-bold'>
                  List of best Soccer trics
                </a>
                <p className='my-1'>Lorem ipsum dolor sit.</p>
              </div>
              <p>November 30 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularPosts

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { subscribeNewsletter } from '../../redux/actionCreators/newsletterActions'
import Loading from '../Loading/Loading'

const Newsletter = () => {
  const dispatch = useDispatch()
  const { loading, success, message } = useSelector((state) => state.newsletter)
  const handleNewsletter = (e) => {
    e.preventDefault()
    const name = e.target.username.value
    const email = e.target.email.value
    const userData = {
      name,
      email,
    }
    dispatch(subscribeNewsletter(userData))
    e.target.username.value = ''
    e.target.email.value = ''
  }
  return (
    <div className='border p-4'>
      <div className='border-t-8 border-indigo-700'>
        <h2 className='text-2xl my-3 ml-2 uppercase'>Newsletters</h2>
        <div className='border p-4'>
          <h2 className='text-sm font-bold'>Subscribe Now!</h2>
          <p className='text-sm'>
            You will get the latest sports updates and transfer news in your
            Email.
          </p>
          <form
            className='flex flex-col gap-4 my-5'
            onSubmit={handleNewsletter}
          >
            <div className='form-control'>
              <input
                type='text'
                name='username'
                placeholder='Your Name'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                className='input input-bordered'
              />
            </div>
            {message && <p className='text-red-600'>{message}</p>}
            {success && (
              <p className='text-green-600'>Successfully Subscribed</p>
            )}
            {loading && <Loading />}
            <div className='form-control'>
              <button className='btn btn-primary'>Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter

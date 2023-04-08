import React, { useEffect } from 'react'
import DashboardContentHeader from '../../../components/DashboardContentHeader/DashboardContentHeader'
import Subscriber from '../../../components/Subscriber/Subscriber'
import { useDispatch, useSelector } from 'react-redux'
import { getNewsletterSubscribers } from '../../../redux/actionCreators/newsletterActions'
import Loading from '../../../components/Loading/Loading'

const Subscribers = () => {
  const dispatch = useDispatch()
  const { loading, subscribers, message } = useSelector(
    (state) => state.newsletterSubscribers
  )
  useEffect(() => {
    dispatch(getNewsletterSubscribers())
  }, [])
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <DashboardContentHeader content={subscribers?.data} title='Subscribers' />
      <div className='overflow-x-auto'>
        <table className='table text-sm w-full'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {message && <p className='text-red-600'>{message}</p>}
            {subscribers?.data?.map((subscriber, index) => (
              <Subscriber
                subscriber={subscriber}
                key={subscriber._id}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Subscribers

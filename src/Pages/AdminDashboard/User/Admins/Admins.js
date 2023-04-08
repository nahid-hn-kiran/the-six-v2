import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashboardContentHeader from '../../../../components/DashboardContentHeader/DashboardContentHeader'
import Loading from '../../../../components/Loading/Loading'
import User from '../../../../components/Users/User'
import { getAllAdmins } from '../../../../redux/actionCreators/userActions'

const Admins = () => {
  const { loading, admins, message } = useSelector((state) => state.allAdmins)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllAdmins())
  }, [])
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <DashboardContentHeader
        content={admins?.admins}
        title='admins'
        linkTitle='see users'
        link='users'
      />
      <div className='overflow-x-auto'>
        <table className='table text-sm w-full'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {message && <p>{message}</p>}
            {admins?.admins?.map((user, index) => (
              <User user={user} key={user._id} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admins

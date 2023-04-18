import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashboardContentHeader from '../../../../components/DashboardContentHeader/DashboardContentHeader'
import Loading from '../../../../components/Loading/Loading'
import User from '../../../../components/Users/User'
import {
  getAllAdmins,
  updateUserRole,
} from '../../../../redux/actionCreators/userActions'

const Admins = () => {
  const {
    loading: removeAdminLoading,
    success,
    message: removeAdminMessage,
  } = useSelector((state) => state.updateUserRole)
  const { loading, admins, message } = useSelector((state) => state.allAdmins)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllAdmins())
  }, [dispatch, success])

  const removeAdmin = (id, role) => {
    dispatch(updateUserRole(id, role))
  }

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
      {message && <p>{message}</p>}
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
            {admins?.admins?.map((user, index) => (
              <User
                user={user}
                key={user._id}
                index={index}
                removeAdmin={removeAdmin}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Admins

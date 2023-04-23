import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashboardContentHeader from '../../../../components/DashboardContentHeader/DashboardContentHeader'
import Loading from '../../../../components/Loading/Loading'
import User from '../../../../components/Users/User'
import {
  getAllUsers,
  updateUserRole,
} from '../../../../redux/actionCreators/userActions'
import { toast } from 'react-hot-toast'

const AllUsers = () => {
  const {
    loading: makeAdminLoading,
    success,
    message: makeAdminMessage,
  } = useSelector((state) => state.updateUserRole)

  const { loading, users, message } = useSelector((state) => state.allUsers)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch, success])

  const makeAdmin = (id, role) => {
    if (window.confirm('Are you sure')) {
      dispatch(updateUserRole(id, role))
    }
  }

  if (loading) {
    return <Loading />
  }
  if (success) {
    toast('Sucessfully added')
  }
  return (
    <div>
      <DashboardContentHeader
        content={users?.users}
        title='users'
        linkTitle='see admins'
        link='admins'
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
            {message && <p className='text-red-600'>{message}</p>}
            {users?.users?.map((user, index) => (
              <User
                user={user}
                key={user._id}
                index={index}
                makeAdmin={makeAdmin}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllUsers

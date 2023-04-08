import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../../redux/actionCreators/userActions'
import Loading from '../../../components/Loading/Loading'

const AdminNavbar = () => {
  const { loading, data } = useSelector((state) => state.loggedInUser)
  const dispatch = useDispatch()
  return (
    <div className='navbar px-4'>
      {loading && <Loading />}
      <div className='navbar-start'>
        <Link to='' className='btn btn-ghost normal-case text-xl'>
          The Six
        </Link>
      </div>
      <div className='navbar-center'>
        <div className='form-control'>
          <input
            type='text'
            placeholder='Search'
            className='input input-bordered'
          />
        </div>
      </div>
      <div className='navbar-end'>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img src={data?.user?.imgURL} alt='aa' />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to className='justify-between'>
                Profile
              </Link>
            </li>
            <li>
              <Link to onClick={() => dispatch(logout())}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar

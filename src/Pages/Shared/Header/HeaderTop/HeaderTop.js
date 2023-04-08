import React, { useEffect } from 'react'
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
  FaUserAlt,
  FaFacebookF,
  FaSistrix,
} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import {
  loggedInUser,
  logout,
} from '../../../../redux/actionCreators/userActions'
import { Link } from 'react-router-dom'
import '../Header.css'
import Loading from '../../../../components/Loading/Loading'

const HeaderTop = () => {
  const dispatch = useDispatch()
  const { loading, data } = useSelector((state) => state.loggedInUser)
  useEffect(() => {
    dispatch(loggedInUser())
  }, [dispatch])
  return (
    <div className='header-top py-5 my-0 bg-neutral text-white'>
      <div className='container flex justify-between items-center'>
        <div className='w-6/12 sm:w-8/12'>
          <ul className='flex gap-3'>
            <li>
              <Link to='/'>
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link to='/'>
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to='/'>
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link to='/'>
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link to='/'>
                <FaDiscord />
              </Link>
            </li>
          </ul>
        </div>
        <div className='hidden sm:block'>
          <ul className='flex gap-4 uppercase'>
            {data?.user ? (
              <>
                <button
                  className='btn btn-secondary'
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </button>
                <Link className='btn btn-accent' to='/admin/dashboard'>
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                {loading && ''}
                <label htmlFor='login-modal' className='btn'>
                  <li>
                    <span className='inline-grid mr-2'>
                      <FaUserAlt />
                    </span>
                    login
                  </li>
                </label>
                <label htmlFor='register-modal' className='btn'>
                  <li>
                    <span className='inline-grid mr-2'>
                      <FaUserAlt />
                    </span>
                    Register
                  </li>
                </label>
              </>
            )}
          </ul>
        </div>
        <div className='text-xl cursor-pointer'>
          <span>
            <FaSistrix />
          </span>
        </div>
      </div>
      {/* Login/Register on small screen  */}
      <div className='sm:hidden flex justify-center sm:order-last my-4'>
        <ul className='flex gap-4 uppercase'>
          {data?.user ? (
            <>
              <button
                className='btn btn-secondary'
                onClick={() => dispatch(logout())}
              >
                Logout
              </button>
              <Link className='btn btn-accent' to='/admin/dashboard'>
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <label htmlFor='login-modal' className='btn'>
                <li>
                  <span className='inline-grid mr-2'>
                    <FaUserAlt />
                  </span>
                  login
                </li>
              </label>
              <label htmlFor='register-modal' className='btn'>
                <li>
                  <span className='inline-grid mr-2'>
                    <FaUserAlt />
                  </span>
                  Register
                </li>
              </label>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default HeaderTop

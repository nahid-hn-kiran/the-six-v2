import React, { useEffect, useState } from 'react'
import { register } from '../../../redux/actionCreators/userActions'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../../components/Loading/Loading'

const Register = () => {
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch()
  const { loading, message, success } = useSelector(
    (state) => state.registerUser
  )

  useEffect(() => {
    if (success) {
      window.location.reload()
    }
  }, [success])

  const handleRegister = (e) => {
    e.preventDefault()
    let name = e.target.fullname.value
    let email = e.target.email.value
    let password = e.target.password.value
    let confirmPassword = e.target.confirmpassword.value
    const user = {
      name,
      email,
      password,
      confirmPassword,
    }
    dispatch(register(user))
    e.target.fullname.value = ''
    e.target.email.value = ''
    e.target.password.value = ''
    e.target.confirmpassword.value = ''
  }
  return (
    <>
      <input type='checkbox' id='register-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='register-modal'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <form onSubmit={handleRegister}>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Name</span>
              </label>
              <input
                type='text'
                name='fullname'
                placeholder='Your Name'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                placeholder='Your Email'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='Your Password'
                className='input input-bordered'
              />
              <small>include at least 1 special charecter and uppercase</small>
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Confirm Password</span>
              </label>
              <input
                type='password'
                name='confirmpassword'
                placeholder='Confirm Password'
                className='input input-bordered'
              />
            </div>
            <div className='form-control'>
              <label className='flex items-center gap-4 mt-3 cursor-pointer'>
                <input
                  type='checkbox'
                  name='checked'
                  onClick={() => setChecked(!checked)}
                  className='checkbox checkbox-primary'
                />
                <span className='label-text'>
                  I agree to the terms and conditions.
                </span>
              </label>
            </div>
            <p className='my-2 text-green-600'>
              {success && (
                <span>successfully registerd. please login now.</span>
              )}
            </p>
            <p className='text-red-600 my-3'>{!success && message}</p>
            {loading && <Loading />}
            <div className='form-control mt-6 modal-action'>
              <button
                htmlFor='register-modal'
                className='btn btn-primary'
                disabled={!checked}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register

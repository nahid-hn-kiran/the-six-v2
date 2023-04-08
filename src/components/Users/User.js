import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ user, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user?.name}</td>
      <td>{user?.email}</td>
      <td>
        <div className='avatar'>
          <div className='w-12 h-12 rounded-full'>
            <Link to={`/admin/${user?._id}`}>
              <img
                className='w-12 h-12 rounded'
                src={user?.imgURL}
                alt={user?.name}
              />
            </Link>
          </div>
        </div>
      </td>
      <td className='text-white'>
        <button className='bg-red-600 px-2 rounded mx-2'>block</button>
        {user?.role === 'admin' ? (
          <button className='bg-red-600 px-2 rounded mx-2'>remove admin</button>
        ) : (
          <button className='bg-green-500 px-2 rounded mx-2'>make admin</button>
        )}
      </td>
    </tr>
  )
}

export default User

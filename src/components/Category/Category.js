import React from 'react'
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'

const Category = ({ category }) => {
  return (
    <div className='card w-72 bg-neutral text-neutral-content'>
      <div className='card-body items-center text-center'>
        <div>
          <h2 className='card-title'>Name</h2>
          <h2 className='card-lg'>{category?.name}</h2>
        </div>
        <div className='card-actions justify-center'>
          <button className='btn btn-info'>
            <FaPencilAlt />
          </button>
          <button className='btn btn-secondary'>
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Category

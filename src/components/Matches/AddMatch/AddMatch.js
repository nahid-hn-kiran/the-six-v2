import React from 'react'
import Datetime from 'react-datetime'
import 'react-datetime/css/react-datetime.css'

const AddMatch = ({ matchDay, setMatchDay, handleChange }) => {
  return (
    <>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Team 1</span>
        </label>
        <input
          type='text'
          placeholder='team 1'
          name='team1'
          onChange={handleChange}
          className='input input-bordered'
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Team 1 logo</span>
        </label>
        <input
          type='file'
          name='team1logo'
          onChange={handleChange}
          className='file-input file-input-bordered w-full max-w-xs'
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Team 2</span>
        </label>
        <input
          type='text'
          placeholder='team 2'
          name='team2'
          onChange={handleChange}
          className='input input-bordered'
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Team 2 logo</span>
        </label>
        <input
          type='file'
          name='team2logo'
          onChange={handleChange}
          className='file-input file-input-bordered w-full max-w-xs'
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Venue</span>
        </label>
        <input
          type='text'
          placeholder='name'
          name='venue'
          onChange={handleChange}
          className='input input-bordered'
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>When</span>
        </label>
        <Datetime
          value={matchDay}
          onChange={(value) => setMatchDay(value)}
          name='datetime'
          className='input input-bordered flex items-center'
        />
      </div>
    </>
  )
}

export default AddMatch

import React from 'react'
import Loading from '../Loading/Loading'

const AddContentForm = ({ labels, handleChange, formData }) => {
  if (!formData && !formData.url) {
    return <Loading />
  }
  return (
    <>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>{labels?.name}</span>
        </label>
        <input
          type='text'
          placeholder='name'
          name='name'
          value={formData?.name}
          onChange={handleChange}
          className='input input-bordered'
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Thumbnail</span>
        </label>
        <input
          type='file'
          name='thumbnail'
          onChange={handleChange}
          className='file-input file-input-bordered w-full max-w-xs'
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>{labels?.description}</span>
        </label>
        <textarea
          placeholder='description'
          name='description'
          onChange={handleChange}
          value={formData?.description}
          className='textarea textarea-bordered textarea-lg w-full'
        ></textarea>
      </div>
      {formData?.url && (
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Add url</span>
          </label>
          <input
            type='text'
            placeholder='url'
            name='url'
            value={formData?.url}
            onChange={handleChange}
            className='input input-bordered'
          />
        </div>
      )}
    </>
  )
}

export default AddContentForm

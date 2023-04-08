import React, { useState } from 'react'
import DashboardContentHeader from '../../../../components/DashboardContentHeader/DashboardContentHeader'
import { useDispatch, useSelector } from 'react-redux'
import { addTag } from '../../../../redux/actionCreators/tagActions'
import Loading from '../../../../components/Loading/Loading'
import AddContentForm from '../../../../components/AddContentForm/AddContentForm'

const AddTag = () => {
  const dispatch = useDispatch()
  const { loading, success, message } = useSelector((state) => state.addTag)
  const initialFormData = {
    name: '',
    description: '',
    thumbnail: null,
  }

  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (event) => {
    const { name, value, files } = event.target

    setFormData((prvData) => ({
      ...prvData,
      [name]: files ? files[0] : value,
    }))
  }

  const handleAddTag = (e) => {
    e.preventDefault()
    const theFormData = new FormData()
    theFormData.append('name', formData.name)
    theFormData.append('description', formData.description)
    theFormData.append('thumbnail', formData.thumbnail)
    dispatch(addTag(theFormData))
    setFormData(initialFormData)
  }
  const labels = {
    name: 'Tag Name',
    content: 'Tag Description',
  }
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <DashboardContentHeader
        title='Add tag'
        linkTitle='All tags'
        link='tags'
      />
      <form className='flex flex-col gap-4' onSubmit={handleAddTag}>
        <AddContentForm
          labels={labels}
          handleChange={handleChange}
          formData={formData}
        />
        {message && <p className='text-red-600'>{message}</p>}
        {success && <p className='text-green-400'>Tag successfully created</p>}
        <div>
          <button className='btn'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddTag

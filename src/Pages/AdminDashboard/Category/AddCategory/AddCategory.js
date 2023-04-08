import React, { useState } from 'react'
import DashboardContentHeader from '../../../../components/DashboardContentHeader/DashboardContentHeader'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory } from '../../../../redux/actionCreators/categoryActions'
import Loading from '../../../../components/Loading/Loading'
import AddContentForm from '../../../../components/AddContentForm/AddContentForm'

const AddCategory = () => {
  const { loading, success, message } = useSelector(
    (state) => state.addCategory
  )
  const dispatch = useDispatch()

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

  const handleAddCategory = (e) => {
    e.preventDefault()
    const theFormData = new FormData()
    theFormData.append('name', formData.name)
    theFormData.append('description', formData.description)
    theFormData.append('thumbnail', formData.thumbnail)
    dispatch(addCategory(theFormData))
    setFormData(initialFormData)
  }
  if (loading) {
    return <Loading />
  }
  const labels = {
    name: 'Category Name',
    content: 'Category Description',
  }
  return (
    <div>
      <DashboardContentHeader
        title='add category'
        linkTitle='all categories'
        link='categories'
      />
      <form className='flex flex-col gap-4' onSubmit={handleAddCategory}>
        <AddContentForm
          labels={labels}
          handleChange={handleChange}
          formData={formData}
        />
        {message && <p className='text-red-600'>{message}</p>}
        {success && (
          <p className='text-green-400'>Category successfully created</p>
        )}
        <div>
          <button className='btn'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddCategory

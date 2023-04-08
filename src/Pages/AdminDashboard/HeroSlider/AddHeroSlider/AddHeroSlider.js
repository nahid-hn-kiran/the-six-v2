import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postHeroSlider } from '../../../../redux/actionCreators/sliderActions'
import Loading from '../../../../components/Loading/Loading'
import DashboardContentHeader from '../../../../components/DashboardContentHeader/DashboardContentHeader'
import AddContentForm from '../../../../components/AddContentForm/AddContentForm'

const AddHeroSlider = () => {
  const dispatch = useDispatch()

  const { loading, success, message } = useSelector(
    (state) => state.addHeroSlider
  )

  const initialFormData = {
    name: '',
    description: '',
    thumbnail: null,
    url: 'http://',
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
    console.log(formData)
    const theFormData = new FormData()
    theFormData.append('title', formData.name)
    theFormData.append('description', formData.description)
    theFormData.append('thumbnail', formData.thumbnail)
    theFormData.append('url', formData.url)
    dispatch(postHeroSlider(theFormData))
    // setFormData(initialFormData)
  }
  const labels = {
    name: 'Slider title',
    content: 'Slider description',
  }
  if (loading) {
    return <Loading />
  }
  return (
    <div>
      <DashboardContentHeader
        title='Add Slider'
        linkTitle='All sliders'
        link='hero-sliders'
      />
      <form className='flex flex-col gap-4' onSubmit={handleAddTag}>
        <AddContentForm
          labels={labels}
          handleChange={handleChange}
          formData={formData}
        />
        {message && <p className='text-red-600'>{message}</p>}
        {success && (
          <p className='text-green-400'>Slider successfully created</p>
        )}
        <div>
          <button className='btn'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddHeroSlider

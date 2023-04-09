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

  const imgbbKey = process.env.REACT_APP_IMGBB_KEY
  const handleAddTag = (e) => {
    e.preventDefault()
    const imgData = new FormData()
    imgData.append('image', formData.thumbnail)
    const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`
    fetch(url, {
      method: 'POST',
      body: imgData,
    })
      .then((res) => res.json())
      .then((bbData) => {
        if (bbData.success) {
          const theSlider = {
            title: formData.name,
            description: formData.description,
            thumbnail: bbData.data.url,
            url: formData.url,
          }
          dispatch(postHeroSlider(theSlider))
          setFormData(initialFormData)
        }
      })
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

import React, { useState } from 'react'
import AddMatch from '../../../../../components/Matches/AddMatch/AddMatch'
import DashboardContentHeader from '../../../../../components/DashboardContentHeader/DashboardContentHeader'
import { useDispatch, useSelector } from 'react-redux'
import { postNewMatch } from '../../../../../redux/actionCreators/matchActions'
import Loading from '../../../../../components/Loading/Loading'

const AddFootballMatch = () => {
  const [matchDay, setMatchDay] = useState(new Date())

  const dispatch = useDispatch()
  const { loading, success, message } = useSelector(
    (state) => state.addNewMatch
  )

  const initialFormData = {
    team1: '',
    team1logo: null,
    team2: '',
    team2logo: null,
    venue: '',
  }
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (event) => {
    const { name, value, files } = event.target

    setFormData((prvData) => ({
      ...prvData,
      [name]: files ? files[0] : value,
    }))
  }

  const handleAddMatch = (e) => {
    e.preventDefault()
    const theFormData = new FormData()
    theFormData.append('team1', formData.team1)
    theFormData.append('team1logo', formData.team1logo)
    theFormData.append('team2', formData.team2)
    theFormData.append('team2logo', formData.team2logo)
    theFormData.append('venue', formData.venue)
    theFormData.append('datetime', matchDay)
    dispatch(postNewMatch(theFormData))
    setFormData(initialFormData)
  }
  return (
    <div>
      <form>
        <h2>Add a Football match</h2>
      </form>
      <DashboardContentHeader
        title='Add match'
        linkTitle='All matches'
        link='hero-sliders'
      />
      <form className='flex flex-col gap-4' onSubmit={handleAddMatch}>
        <AddMatch
          matchDay={matchDay}
          setMatchDay={setMatchDay}
          handleChange={handleChange}
        />
        <div>
          {loading && <Loading />}
          {message && <p className='text-red-600'>{message}</p>}
          {success && (
            <p className='text-green-600'>Successfully added new match.</p>
          )}
          <button className='btn'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddFootballMatch

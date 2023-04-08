import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PointTableCard from '../../../../components/cards/PointTableCard'

const PremierLeagueTable = () => {
  const [pointTable, setPointTable] = useState([])
  useEffect(() => {
    const laligaTable = async () => {
      const { data } = await axios.get('premierleaguetable.json')
      setPointTable(data)
    }
    laligaTable()
  }, [])
  return (
    <div className='border'>
      <div className='border-t-8 border-indigo-700'>
        <PointTableCard title='Premier League Table' pointTable={pointTable} />
      </div>
    </div>
  )
}

export default PremierLeagueTable

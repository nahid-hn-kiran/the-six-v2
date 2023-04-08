import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PointTableCard from '../../../../components/cards/PointTableCard'

const LaLigaTable = () => {
  const [pointTable, setPointTable] = useState([])
  useEffect(() => {
    const laligaTable = async () => {
      const { data } = await axios.get('laligatable.json')
      setPointTable(data)
    }
    laligaTable()
  }, [])
  return (
    <div className='border'>
      <div className='border-t-8 border-indigo-700'>
        <PointTableCard title='La Liga Table' pointTable={pointTable} />
      </div>
    </div>
  )
}

export default LaLigaTable

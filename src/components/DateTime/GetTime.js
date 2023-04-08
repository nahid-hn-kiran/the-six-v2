import React from 'react'

const GetTime = (iso) => {
  const date = new Date(iso)
  const time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })
  return time
}

export default GetTime

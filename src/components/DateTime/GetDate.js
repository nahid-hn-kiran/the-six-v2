import React from 'react'

const GetDate = (iso) => {
  const date = new Date(iso)
  const longDate = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  return longDate
}

export default GetDate

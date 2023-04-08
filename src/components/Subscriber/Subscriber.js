import React from 'react'

const subscriber = ({ subscriber, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{subscriber?.name}</td>
      <td>{subscriber?.email}</td>
    </tr>
  )
}

export default subscriber

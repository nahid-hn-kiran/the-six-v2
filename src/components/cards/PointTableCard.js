import React from 'react'

const PointTableCard = ({ title, pointTable }) => {
  return (
    <>
      <h2 className='text-2xl my-3 ml-2'>{title}</h2>
      <div className='overflow-x-auto'>
        <table className='table table-zebra w-full text-sm'>
          {/* head */}
          <thead>
            <tr>
              <th>Team</th>
              <th>M</th>
              <th>W</th>
              <th>PTS</th>
            </tr>
          </thead>
          <tbody>
            {pointTable?.slice(0, 10).map((table, index) => (
              <tr className='hover' key={table?.logo}>
                <td className='flex items-center gap-4'>
                  <span>{index + 1}</span>
                  <img src={table?.logo} alt='flag' className='w-8' />
                  <span>{table?.name}</span>
                </td>
                <td>{table?.matches}</td>
                <td>{table?.win}</td>
                <td>{table?.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* row 1 */}
    </>
  )
}

export default PointTableCard

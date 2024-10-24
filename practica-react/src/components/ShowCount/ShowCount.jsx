import React from 'react'
import './ShowCount.css'

function ShowCount({ count }) {
  return (
    <div className='ShowCount'>
      <p>Número de clics: {count}</p>
    </div>
  )
}

export default ShowCount

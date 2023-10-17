import React from 'react'
import './styls/style.scss'
import error from'../../assets/images/error.png'

export default function Error() {
  return (
    <div className='error'>
      <img src={error}  alt='error'/>
    </div>
  )
}

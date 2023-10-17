import React from 'react';
import './styls/style.scss'
import spinner from '../../assets/images/spinner.svg'

export default function Loader() {
  return (
    <div className='Loader'>
      <img src={spinner} alt='spinner' />
    </div>
  )
}
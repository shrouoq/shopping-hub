import React from 'react'
import './styles/style.css'




export default function Cart({cartItem}) {
  return (
    <>
        <div className='cart'>
        
            <div className='cart-picBox'>
                    <img src={cartItem.category.image}  alt='pic'/>
                    <p>{cartItem.category.name}</p>
            </div>

            <div className='cart-data'>
                <p className='dataItem-title'>{cartItem.title}</p>
                <p className='price'>${cartItem.price}</p>
            </div>

        </div>
    </>
  )
}

import React , { useState } from 'react'
import './styls/style.css'
import ReactDOM from 'react-dom';
import Cart from '../CartItem/Cart'
import ShopCart from './../shoppingCart/ShopCart';




export default function Items({data , title}) {
 
  const [show , setShow] = useState(false)
  const [item , setItem] = useState({})

  
  const HandelClick = (e) => {
    setItem(e)
    setShow(true)
  }

  return (

    <>
    <div className='All-Items'>
      <div className='container'>
            <p className='title'>{title}</p>
            <div className='Items-container'>
                
            
          
          {
            
            
              data.map(ele => (
                <div onClick={() => HandelClick(ele)}>
                  <Cart cartItem={ele} /> 
                </div>
              ))
            
          }
        


            </div>
      </div>
    </div>

    {
      show && ReactDOM.createPortal(
          <ShopCart setSh={setShow} item={item} />
          ,document.body
      )
    }
  </>
  )
}

import React , {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import './styls/style.css'
import { AddToCart } from '../../slice/selectedDataSlice';




export default function ShopCart({setSh,item}) {

  const Dispatch = useDispatch()
  const Navigate = useNavigate()
  const [qty,setQty] = useState(1)
  const {data} = useSelector(state => state.Cart)

  const HandelMin = () => {
    setQty((oldQty) => {
      let newQty = oldQty-1
      if(newQty < 0){
        return newQty = 0
      }
      return newQty
    })
  }

  const HandelPlus = () => {
    setQty((oldQty) => {
      let newQyt = oldQty + 1
      return newQyt
    })
  }

  const HandelAddToCard = (selectedItem) => {
      let totalqty = qty
      let totalPrice = totalqty * selectedItem.price
      let newItem ={
        ...selectedItem,
        quantity : qty,
        totalPrice
      }
      Dispatch(AddToCart(newItem))
      setSh(false)
      Navigate('/select')
  }

  console.log(data);
      
  return (
    <div className='shoppingCart'>
      <div className='data'>
          
          <div className='close' onClick={() => setSh(false)}>
            <i class="ri-close-line"></i>
          </div>

          <div className='picBox box '>
              <img src={item.category.image} alt='' />
          </div>

          <div className='details box'>
              <div className='details-data'>
                <p className='data-title'>{item.title}</p>
                <p className='descreption'>{item.description}</p>
                <p className='price'>price:${item.price}</p>
              </div>

              <div className='qty'>
                    <div className='num'>
                      quty : 
                      <button onClick={() => HandelMin()} className='min'><i class="ri-subtract-line"></i></button>
                      <span>{qty}</span>
                      <button onClick={() => HandelPlus()} className='plus'><i class="ri-add-fill"></i></button>
                    </div>

                    <button onClick={() => HandelAddToCard(item)} className='addToCard-btn'><i class="fa-solid fa-cart-shopping"></i>add to cart</button>

                    
              </div>
          </div>
      </div>
    </div>
  )
}

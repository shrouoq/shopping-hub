import React , { useEffect } from 'react'
import './styls/style.css'
import { Link } from 'react-router-dom'
import { RemoveItem , ClearCart , ToggleItems , ToTalPrices } from '../../slice/selectedDataSlice'
import { useSelector , useDispatch  } from 'react-redux'


export default function SelectedItems() {
  const {data , totalPrice} = useSelector(state => state.Cart)
  const Dispatch = useDispatch()

  const HanelRemoveItem = (el) => {
    Dispatch(RemoveItem(el))
  }

  const HandelClear = () => {
      Dispatch(ClearCart())
  }

  useEffect(() => {
    Dispatch(ToTalPrices())
  }, [useSelector(state => state.Cart)])

  return (
    <div className='selected-items'>

      <div className='nav-category'>
          <div className='container'>

          <Link className='link icon' to='/'>
            <i class="ri-home-4-fill"></i>
          </Link>

          <div className='break icon'>
            <i class="ri-arrow-right-double-line"></i>
          </div>

          <p>category</p>

          </div>
      </div>

      {
        data.length > 0 ? 
        <div className='items-details'>
            <div className='container'>

                <div className='items-box'>
                      
                      {
                        data.map(ele => (
                          <div className='item-box' key={ele.id}>

                                  <div className='item'>

                                    <div className='pic'>
                                      <img src={ele.category.image} alt='pic' />
                                      <button onClick={() => HanelRemoveItem(ele)}><i class="ri-delete-bin-6-fill"></i></button>
                                    </div>

                                    <div className='item-data'>

                                      <p className='item-data-title'>{ele.title}</p>

                                      <div className='num'>
                                          quty : 
                                          <button className='min' onClick={() => Dispatch(ToggleItems({id:ele.id , type:'DEC'}))}><i class="ri-subtract-line"></i></button>
                                          <span>{ele.quantity}</span>
                                          <button className='plus' onClick={() => Dispatch(ToggleItems({id:ele.id , type:'INC'}))}><i class="ri-add-line"></i></button>
                                      </div>

                                      <p className='price'>price : ${ele.price}</p>
                                    </div>

                                  </div>

                                  <div className='totalPrice'>
                                    <p>sub total : ${ele.totalPrice}</p>
                                  </div>

                          </div>
                        ))
                      }

                    <button onClick={() => HandelClear()} className='clear'>clear cart</button>
                </div>

                <div className='price-details'>
                      <div className='priceBox'>
                          <p className='priceBox-title'>order summery</p>

                          <div className='content'>

                              <div className='itemsPrice box'>
                                <p>selected item(s) price</p>
                                <span className='price-num'>${totalPrice}</span>
                              </div>

                              <div className='discount box'>
                                <p>discount</p>
                                <span className='price-num'>-$0.00</span>
                              </div>

                              <div className='shipping box'>
                                <p>delivery coast</p>
                                <span className='price-num'>$10</span>
                              </div>

                          </div>


                          <div className='price-footer'>
                            <p>grand total:</p>
                            <span>${totalPrice + 10}</span>
                          </div>
                      </div>

                      <button className='proceed-btn'>proceed to check out</button>
                </div>

            </div>
        </div>
        :
        <p className='no-items'>no items found</p>
      }

    </div>
  )
}

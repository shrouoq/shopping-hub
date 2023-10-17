import React from 'react'
import './styls/navStyle.css'
import {Link} from 'react-router-dom'
import { useState , useEffect } from 'react'
import { useSelector , useDispatch  } from 'react-redux'
import { getData } from '../../slice/allDataSlice'
import { ToTalPrices } from '../../slice/selectedDataSlice'
import { useNavigate } from 'react-router-dom'


export default function NavBar() {
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const {categories} = useSelector(state => state.Data)
    const {totalAmount} = useSelector(state => state.Cart)
    const [toggle , setToggle] = useState(false)

    const HandelShoppingBasket = () => {
        Navigate('/select')
    }

    useEffect(() => {
        dispatch(getData())
        dispatch(ToTalPrices())
    },[dispatch])


  return (
    <div className='NavBar'>
      
        <div className='TopNav'>
            <div className='container'>

                <div className='Box Logo'>
                    <Link to='/' className='link logoLink'>
                        shopping<span>Hub.</span>
                    </Link>
                </div>

                <div className='Box search'>
                    <form>
                        <input type='text' placeholder='search here...' />
                        
                        <button><i class="ri-search-line"></i></button>
                                         
                    </form>
                </div>

                <div className='Box icons'>
                    

                    <div className='basketNum' onClick={() => HandelShoppingBasket()}>
                        <Link to='' className='shopping-basket'><i class="ri-shopping-cart-2-fill"></i></Link>
                        cart<span>{totalAmount}</span>
                    </div>

                </div>
            </div>
        </div>

        <div className='bottomNav'>
            <div className='container'>

                <div className={`icons-container ${toggle ? 'showSideBar' : ''}`}>
                    <div className='closeIcon' onClick={() => setToggle(false)}>
                        <i class="ri-close-fill"></i>
                    </div>

                    <div className='Navbar-Icons'>
                        {
                            categories.map(ele => (
                                <>
                                    <Link onClick={() => setToggle(false)} to={`/category/${ele}`} key={categories.indexOf(ele)} className='link'>{ele}</Link>
                                </>
                            ))
                        }
                    </div>
                </div>

                <div className='bars' onClick={() => setToggle(true)}>
                    <i class="ri-bar-chart-horizontal-fill"></i>
                </div>

            </div>
        </div>

    </div>
  )
}

import React , { useEffect } from 'react'
import {Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Items from '../components/categoryAllItems/Items';
import Error from './../components/Error/error';
import Loader from './../components/Loader/Loader';
import { getData } from '../slice/allDataSlice';

export default function ItemsContainer() {
    const Dispatch = useDispatch()
    const {Data , Loading , errors} = useSelector(state => state.Data);
    const Params = useParams();
    const Name = Params.name;
    
    const dataType = () => {
      let selecData = Data.filter(ele => ele.category.name === Name)
      return selecData
    }

    useEffect(()=> {
        Dispatch(getData())
    },[Name])

  return (
    
    <>
      <div className='nav-category'>
          <div className='container'>
              <Link className='link icon' to='/'>
                <i class="ri-home-4-fill"></i>
              </Link>

              <div className='break icon'>
                <i class="ri-arrow-right-double-line"></i>
              </div>

              <p>category</p>

              <div className='break icon'>
                <i class="ri-arrow-right-double-line"></i>
              </div>

              <p className='nav-category-name'>
                  {Name}
              </p>


          </div>
      </div>

      {
        Loading ? <Loader/> :(errors?<Error/> :
          <div className='ItemsContainer'>
            <div>
              <Items data={dataType()} title='our products' />
            </div>
          </div>
        )
      }
    </>
  )
}

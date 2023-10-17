import React, { useEffect } from 'react'
import './styles/style.css'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Items from '../../components/categoryAllItems/Items';
import { getData } from '../../slice/allDataSlice'; 
import Slider from './../../components/slider/Slider';
import Error from '../../components/Error/error'
import Loader from '../../components/Loader/Loader';

export default function Home() {
  const Dispatch = useDispatch()
  const {Data , categories , Loading , errors} = useSelector(state => state.Data)

  const itemsGroup = (name) => {
      const selectedData =  Data.filter(ele => ele.category.name === name).slice(0,10)
      return selectedData
  }

  useEffect(() => {
    Dispatch(getData())
  },[Dispatch])

  const handelImage = (category) => {
    let eles = Data.find(ele => ele.category.name === category)
    let src = eles.category.image
    return src
  }

  
  return (
   <>
    
    <Slider />

    {
        Loading ? (errors ? <Error /> : 
            <Loader/>
        ) : 
            <div className='categories'>
                <div className='container'>
                    <p className='title'>category</p>
                    <div className='categories-box'>
                        {
                            categories.map(category => (
                                <div className='category-box' key={category}>
                                    <Link className='link' to={`/category/${category}`}>
                                        <img src={handelImage(category)} alt='pic'/>
                                        <p>{category}</p>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
    }

    {
        Loading ? (<Loader/>) : (errors ? <Error/> :
        <>
            <div className='allProducts'>
                <Items data={Data.slice(0,20)} title={'our products'} />
            </div>

            <div className='clothes'>
                <Items data={itemsGroup('Clothes')} title={'clothes'} />
            </div>

            <div className='electronics'>
                <Items data={itemsGroup('Electronics')} title={'electronics'} />
            </div>
        </>
        )
    }

      
   </>
  )
}

/* eslint-disable array-callback-return */
import { createSlice } from '@reduxjs/toolkit';

let FetchDataFromLocalStorage = () => {
   let cart = localStorage.getItem('cart')
   if(cart){
      return JSON.parse(localStorage.getItem('cart'))
   }else{
   return []
   }
}

let storeDataInLocalStorage = (data) => {
   localStorage.setItem('cart' , JSON.stringify(data))
}

const cartSlice = createSlice({
     name:'cart',
     initialState:{
        data:FetchDataFromLocalStorage(),
        totalPrice:0,
        totalAmount:0,
        shipping:1000
     },
     reducers:{
        AddToCart : (state , action) => {
            let item = state.data.find(ele => ele.id === action.payload.id)
            if(item){
               let result = state.data.map(ele => {
                  if(ele.id === action.payload.id){
                     let newQty = ele.quantity + action.payload.quantity
                     let totalPrice = ele.price * newQty
                     return {...ele , totalPrice , quantity:newQty}
                  }else{
                     return ele
                  }
               })
               state.data = result
               storeDataInLocalStorage(state.data)
            }else{
               state.data.push(action.payload)
               storeDataInLocalStorage(state.data)
            }
        },
        ClearCart : (state) => {
         state.data = []
         storeDataInLocalStorage(state.data)
        },
        RemoveItem : (state , action) => {
            let res = state.data.filter(ele => ele.id !== action.payload.id)
            state.data = res
            storeDataInLocalStorage(state.data)
        },
        ToggleItems : (state , action) => {
         let tempItem = state.data.map(ele => {
            if(ele.id === action.payload.id){
               let totalQty = ele.quantity
               let totalPrice = ele.totalPrice

               if(action.payload.type === 'INC'){
                  totalQty ++;
                  totalPrice = totalQty * ele.price
               }
               if(action.payload.type === "DEC"){
                  totalQty -- ;
                  if(totalQty < 0){
                     totalQty =0
                  }
                  totalPrice = totalQty * ele.price
               }

               return {...ele , quantity : totalQty , totalPrice}


            }else{
               return ele
            }
         })
         state.data = tempItem
         storeDataInLocalStorage(state.data)
        },
        ToTalPrices : (state,action) => {
         state.totalAmount = state.data.length

         state.totalPrice = state.data.reduce((acc , current) => {
            let total;
            total = acc + current.totalPrice
            return total;
         },0)
         
        }
     }
})

export default cartSlice.reducer
export const {AddToCart , ClearCart , RemoveItem , ToggleItems , ToTalPrices} = cartSlice.actions

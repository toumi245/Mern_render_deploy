import { CART_ADD_ITEM, CART_REMOVE_ITEM,CART_SAVE_PAYMENT_METHOD,CART_SAVE_SHIPPING_ADRESS } from '../constants/cartConstants';

export const cartReducer=(state={cartItems:[],shippingAdress:{}},action)=>{
  switch (action.type){
    
    case  CART_ADD_ITEM:
    const item=action.payload
    const existItem=state.cartItems.find((x)=>x.product === item.product)
    if (existItem){
      return{
        ...state,
        cartItems:state.cartItems.map((x)=>
          x.product === existItem.product ? item :x
        )
      }
    }else {
      return {
        ...state,
        cartItems:[...state.cartItems,item]
      }
    }
    case CART_REMOVE_ITEM:
      return{
        ...state,
        cartItems:state.cartItems.filter((x)=>x.product !== action.payload),
      }
    case CART_SAVE_SHIPPING_ADRESS:
      return{
        ...state,
        shippingAdress:action.payload
      }
      case CART_SAVE_PAYMENT_METHOD:
      return{
        ...state,
        paymentMethod:action.payload
      }
    default:
      return state
  }
 
    }
   

// export const addToCart=(id,qty)=>async(dispatch,getState)=>{
//     const {data}= await axios.get(`api/products/${id}`)
//     dispatch({
//     type:CART_ADD_ITEM,
//     payload:{product:data._id,
//         name:data.name,
//         image:data.image,
//         price:data.price,
//         qty

//     }
// })
// localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
// }
// export const removeFromCart=(id)=>(dispatch,getState)=>{
//     dispatch({
//         type:CART_REMOVE_ITEM,
//         payload:id,
//     })
//     localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
// }
  
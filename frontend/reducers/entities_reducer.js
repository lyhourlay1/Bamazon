import { combineReducers } from 'redux'
import productReducer from './products_reducer'
import cartReducer from './cart_reducer'
import orderReducer from './order_reducer'

export default combineReducers({
    products: productReducer,
    cart: cartReducer, 
    orders: orderReducer
})
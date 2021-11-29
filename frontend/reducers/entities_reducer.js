import { combineReducers } from 'redux'
import productReducer from './products_reducer'
import cartReducer from './cart_reducer'
import orderReducer from './order_reducer'
import reviewReducer from './review_reducer'

export default combineReducers({
    products: productReducer,
    reviews: reviewReducer,
    cart: cartReducer, 
    orders: orderReducer
})
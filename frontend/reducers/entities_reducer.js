import { combineReducers } from 'redux'
import productReducer from './products_reducer'

export default combineReducers({
    products: productReducer, 
})
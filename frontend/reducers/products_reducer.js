import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from "../actions/product_action"

const ProductsReducer = (state={}, action)=>{
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_PRODUCTS:
            return action.products
        case RECEIVE_PRODUCT:
            newState[action.product.id]= action.product
            return newState;
        default:
            return state
    }
}
export default ProductsReducer
import {RECEIVE_CART} from '../actions/cart_action'

const cartReducer = (state={}, action)=>{
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch(action.type){
        case RECEIVE_CART:
            newState[action.cart.id] = action.cart
            return newState
        // case REMOVE_ORDER:
        //     return state
        default:
            return state;
    }
}

export default cartReducer
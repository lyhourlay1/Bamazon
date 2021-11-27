
import { RECEIVE_ORDERS, RECEIVE_ORDER, REMOVE_ORDER } from '../actions/order_action'

const orderReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ORDER:
            newState[action.order.id] = action.order
            return newState
        case RECEIVE_ORDERS:
            return action.orders
        case REMOVE_ORDER:
            return state
        default:
            return state;
    }
}

export default orderReducer
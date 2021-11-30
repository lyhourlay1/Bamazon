
import { RECEIVE_TRANSACTION, RECEIVE_TRANSACTIONS } from '../actions/transaction_action'

const transactionReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_TRANSACTION:
            newState[action.transaction.id] = action.transaction
            return newState
        case RECEIVE_TRANSACTIONS:
            return action.transactions
        default:
            return state;
    }
}

export default transactionReducer
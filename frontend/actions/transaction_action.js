import * as TransactionApiUtil from '../util/transaction_utils'

export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';
export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';

const receiveTransactions = transactions=>({
    type: RECEIVE_TRANSACTIONS,
    transactions
})

const receiveTransaction = transaction => ({
    type: RECEIVE_TRANSACTION,
    transaction
})

export const fetchTransactions = () => dispatch => (
    TransactionApiUtil.fetchTransactions().then(transactions=> dispatch(receiveTransactions(transactions)))
)

export const createTransaction = transaction => dispatch => (
    TransactionApiUtil.createTransaction(transaction).then(transaction=> dispatch(receiveTransaction(transaction)))
) 
import * as OrderApiUtil from '../util/order_utils'

export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
export const RECEIVE_ORDER = 'RECEIVE_ORDER';
export const REMOVE_ORDER = 'REMOVE_ORDER';

const receiveOrders = orders => ({
    type: RECEIVE_ORDERS,
    orders
});

const receiveOrder = order => ({
    type: RECEIVE_ORDER,
    order
});

const removeOrder = orderId => ({
    type: REMOVE_ORDER,
    orderId
});

export const fetchOrders = () => dispatch => (
    OrderApiUtil.fetchOrders()
        .then(orders => dispatch(receiveOrders(orders)))
);

export const fetchOrder = orderId => dispatch => (
    OrderApiUtil.fetchOrder(orderId)
        .then(order  => dispatch(receiveOrder(order)))
);

export const createOrder = order => dispatch => (
    OrderApiUtil.createOrder(order)
        .then(order => dispatch(receiveOrder(order)))
);

export const updateOrder = order => dispatch => (
    OrderApiUtil.updateOrder(order)
        .then(order => dispatch(receiveOrder(order)))
);

export const deleteOrder = orderId => dispatch => (
    OrderApiUtil.deleteOrder(orderId)
        .then(() => dispatch(removeOrder(oderId)))
);
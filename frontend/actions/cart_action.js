import * as CartApiUtil from "../util/cart_utils";


export const RECEIVE_CART = 'RECEIVE_CART'

const receiveCart = cart =>({
    type: RECEIVE_CART,
    cart
})

// export const createCart = (userId) => dispatch => postCart(userId)
//     .then(cart => dispatch(receiveCart(cart)))
export const fetchCart = (userId) => (dispatch) => (
    CartApiUtil.fetchCart(userId).then(cart => dispatch(receiveCart(cart))))

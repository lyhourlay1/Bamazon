import * as ApiProductUtil from "../util/products_utils";

export const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
export const RECEIVE_PRODUCTS_ERRORS = 'RECEIVE_PRODUCTS_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const receiveProducts = products =>({
    type: RECEIVE_PRODUCTS,
    products,
})

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product,
})

const receiveErrors= (errors)=>({
    type: RECEIVE_PRODUCTS_ERRORS,
    errors
})

const clearErrors = ()=>{
    return {
        type: CLEAR_ERRORS
    }
}

export const fetchProducts = () =>dispatch=> (
    ApiProductUtil.fetchProducts().then((products)=> dispatch(receiveProducts(products)))
)
export const cleanErrors = () =>dispatch=> (
    ApiProductUtil.fetchProducts().then(()=>dispatch(clearErrors())))


export const fetchProduct = (productId) => dispatch=> (
    ApiProductUtil.fetchProduct(productId).then((product=> dispatch(receiveProduct(product))))
)

export const fetchSearchProducts = query => dispatch => (
    ApiProductUtil.fetchSearchProducts(query).then(products => dispatch(receiveProducts(products)),
    error => dispatch(receiveErrors(error.responseJSON)))
)


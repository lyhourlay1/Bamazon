import {
     RECEIVE_PRODUCTS, RECEIVE_PRODUCT, RECEIVE_PRODUCTS_ERRORS, CLEAR_ERRORS
    // RECEIVE_CURRENT_USER,
} from '../actions/product_action';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PRODUCTS_ERRORS:
            return action.errors;
        // case RECEIVE_CURRENT_USER:
        //     return [];
        case RECEIVE_PRODUCTS:
            return [];
        case RECEIVE_PRODUCT:
            return [];
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};
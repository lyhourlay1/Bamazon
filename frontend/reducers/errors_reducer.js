import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import review from './review_errors_reducer'
import products from './products_errors_reducer'

export default combineReducers({
    session,
    review,
    products, 
});

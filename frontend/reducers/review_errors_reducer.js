import {RECEIVE_REVIEW_ERRORS} from '../actions/review_action'

export default (state=[], action)=>{
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_REVIEW_ERRORS:
            return action.errors
        default:
            return state
    }
}


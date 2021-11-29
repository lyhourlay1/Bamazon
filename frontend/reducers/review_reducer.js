import {RECEIVE_REVIEW, RECEIVE_REVIEWS} from "../actions/review_action"

const reviewReducer = (state={}, action)=>{
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_REVIEWS:
            return action.reviews
        case RECEIVE_REVIEW:
            newState[action.review.id]= action.review
            return newState
        default:
            return state
    }
}


export default reviewReducer
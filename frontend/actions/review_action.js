import * as ApiReviewUtil from "../util/review_utils";

export const RECEIVE_ACTION = 'RECEIVE_ACTION'
export const RECEIVE_ACTIONS = 'RECEIVE_ACTION'

export const receiveActions = actions => ({
    type: RECEIVE_ACTIONS,
    actions,
})

export const receiveAction = action => ({
    type: RECEIVE_ACTION,
    action,
})

export const fetchReviews = () => dispatch => (
    ApiReviewUtil.fetchReviews().then((reviews) => dispatch(fetchReviews(reviews)))
)

export const fetchReview = (reviewId) => dispatch => (
    ApiReviewUtil.fetchReview(reviewId).then((review => dispatch(fetchReview(review))))
)

 


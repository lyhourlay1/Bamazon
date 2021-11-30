import * as ApiReviewUtil from "../util/review_utils";

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS'

const receiveReviews= reviews => ({
    type: RECEIVE_REVIEWS,
    reviews,
})

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review,
})

const receiveErrors= errors=>({
    type: RECEIVE_REVIEW_ERRORS,
    errors
})

export const fetchReviews = (product_id) => dispatch => (
    ApiReviewUtil.fetchReviews(product_id).then((reviews) => dispatch(receiveReviews(reviews)))
)

export const fetchReview = (product_id, reviewId) => dispatch => (
    ApiReviewUtil.fetchReview(product_id, reviewId).then((review => dispatch(receiveReview(review))))
)

export const createReview = (formReview)=> dispatch =>(
    ApiReviewUtil.createReview(formReview).then(review => dispatch(receiveReview(review)),
    errors=> dispatch(receiveErrors(errors.responseJSON)))
)

 


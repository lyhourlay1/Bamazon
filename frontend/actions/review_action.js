import * as ApiReviewUtil from "../util/review_utils";

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'

export const receiveReviews= reviews => ({
    type: RECEIVE_REVIEWS,
    reviews,
})

export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review,
})

export const fetchReviews = (product_id) => dispatch => (
    ApiReviewUtil.fetchReviews(product_id).then((reviews) => dispatch(receiveReviews(reviews)))
)

export const fetchReview = (product_id, reviewId) => dispatch => (
    ApiReviewUtil.fetchReview(product_id, reviewId).then((review => dispatch(receiveReview(review))))
)

export const createReview = (review, product_id)=> dispatch =>(
    ApiReviewUtil.createReview(review, product_id).then(review => dispatch(receiveReview(review)))
)

 


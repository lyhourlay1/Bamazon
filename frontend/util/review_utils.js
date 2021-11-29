export const fetchReviews = (product_id) => (
    $.ajax({
        method: 'get',
        url: `/api/products/${product_id}/reviews`
    })

)
export const fetchReview = (product_id,reviewId) => (
    $.ajax({
        method: 'get',
        url: `/api/products/${product_id}/reviews/${reviewId}`,
    })
)

export const createReview = (review, product_id) => {
    return $.ajax({
        method: "post",
        url: `/api/products/${product_id}/reviews`,
        data: { review }
    })
}
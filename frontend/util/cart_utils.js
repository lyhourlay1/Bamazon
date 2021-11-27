// export const postCart = userId => {
//     return $.ajax({
//         url: '/api/carts',
//         method: 'post',
//         data: { cart:{user_id: userId} }
//     })
// }

export const fetchCart = userId => {
    return $.ajax({
        url: `/api/carts/${userId}`,
        method: 'get'
    })
}
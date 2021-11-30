
export const fetchProducts = ()=>(
    $.ajax({
        method: 'get',
        url: 'api/products'
    })

    )
export const fetchProduct = productId=>(
    $.ajax({
        method: 'get',
        url: `api/products/${productId}`,
    })
)

export const fetchSearchProducts = query => (
    $.ajax({
        method: 'get',
        url: '/api/products/search',
        data: {
            query: query
        }
    })
)


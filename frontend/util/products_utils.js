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
        productId
    })
)


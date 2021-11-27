export const fetchOrders = () => (
    $.ajax({
        url: `api/orders/`,
        method: 'get'
    })
);

export const fetchOrder = orderId => (
    $.ajax({
        url: `/api/orders/${orderId}/`,
        method: 'get'
    })
);

export const createOrder = order => (
    $.ajax({
        url: `api/orders/`,
        method: 'POST',
        data: { order }
    })
);

export const updateOrder = order => (
    $.ajax({
        url: `/api/orders/${order.id}`,
        method: 'patch',
        data: { order }
    })
);

export const deleteOrder = orderId => (
    $.ajax({
        url: `/api/orders/${orderId}/`,
        method: 'DELETE'
    })
)
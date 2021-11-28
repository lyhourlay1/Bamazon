import { connect } from "react-redux"
import { createOrder } from "../../actions/order_action"
import { fetchProduct } from "../../actions/product_action"
import ProductShow from "./product_show"

const mSTP = (state, ownProps) => {
    console.log(state)
    console.log(ownProps)
    
    return {
    currentUser: state.session.currentUser,
    product: state.entities.products[ownProps.match.params.productId],
    productId: ownProps.match.params.productId,
    order: { cart_id: Object.keys(state.entities.cart)[0], quantity: 1, 
        product_id: Number(ownProps.match.params.productId), 
        product_name: "" }
}
}
const mDTP = dispatch=>({
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    createOrder: (order) => dispatch(createOrder(order))
})

export default connect(mSTP, mDTP)(ProductShow)
import { connect } from "react-redux"
import { createOrder } from "../../actions/order_action"
import { fetchProduct } from "../../actions/product_action"
import { fetchReviews } from "../../actions/review_action"
import ProductShow from "./product_show"

const mSTP = (state, ownProps) => {
    console.log(state)    
    return {
    currentUser: state.session.currentUser,
    product: state.entities.products[ownProps.match.params.productId],
    productId: ownProps.match.params.productId,
    order: { cart_id: Object.keys(state.entities.cart)[0], quantity: 1, 
        product_id: Number(ownProps.match.params.productId), 
        product_name: "" },
    reviews: Object.values(state.entities.reviews)
    }
    
}
const mDTP = dispatch=>({
    fetchProduct: (productId) => dispatch(fetchProduct(productId)),
    createOrder: (order) => dispatch(createOrder(order)),
    fetchReviews: (productId)=> dispatch(fetchReviews(productId))
    
})

export default connect(mSTP, mDTP)(ProductShow)
import { connect } from "react-redux"
import Cart from './cart'
import { fetchCart } from "../../actions/cart_action"
import { fetchOrders , deleteOrder, fetchOrder} from "../../actions/order_action"
import { createTransaction } from "../../actions/transaction_action"
import { updateOrder } from "../../actions/order_action"

const mSTP = (state, ownProps)=>{
    
    return {
        // cart: state.entities.cart,
        currentUser: state.session.currentUser,
        orders: Object.values(state.entities.orders)
    }
}

const mDTP = dispatch =>({
    // fetchCart: userId => dispatch(fetchCart(userId))
    fetchOrders: ()=> dispatch(fetchOrders()),
    deleteOrder: orderId=> dispatch(deleteOrder(orderId)),
    createTransaction: transaction=>dispatch(createTransaction(transaction)),
    updateOrder: order=> dispatch(updateOrder(order)),
    fetchOrder: orderId => dispatch(fetchOrder(orderId))
})

export default connect(mSTP, mDTP)(Cart)
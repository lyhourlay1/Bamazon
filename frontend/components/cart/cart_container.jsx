import { connect } from "react-redux"
import Cart from './cart'
import { fetchCart } from "../../actions/cart_action"

const mSTP = state=>{
    debugger
    return {
        // cart: state.entities.cart,
        currentUser: state.session.currentUser,

    }
}

const mDTP = dispatch =>({
    // fetchCart: userId => dispatch(fetchCart(userId))
})

export default connect(mSTP, mDTP)(Cart)
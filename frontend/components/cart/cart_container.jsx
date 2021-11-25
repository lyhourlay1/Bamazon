import { connect } from "react-redux"
import Cart from './cart'
import { fetchCart } from "../../actions/cart_action"

const mSTP = state=>{
    
    return {
        cart: state.entities.cart
    }
}

const mDTP = dispatch =>({
    fetchCart: cartId => dispatch(fetchCart(cartId))
})

export default connect(mSTP, mDTP)(Cart)
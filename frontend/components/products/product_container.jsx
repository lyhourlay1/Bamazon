import { connect } from "react-redux"
import Product from "./products"
import { fetchProducts } from "../../actions/product_action"

const mSTP = state=> {
    
    return {
    products: Object.values(state.entities.products)
}}

const mDTP = dispatch =>({
    fetchProducts: ()=> dispatch(fetchProducts())
})

export default connect(mSTP, mDTP)(Product)
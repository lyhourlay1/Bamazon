import { connect } from "react-redux"
import Product from "./products"
import { fetchProducts, fetchSearchProducts } from "../../actions/product_action"

const mSTP = state=> {
    
    return {
    products: Object.values(state.entities.products)
}}

const mDTP = dispatch =>({
    fetchProducts: ()=> dispatch(fetchProducts()),
    fetchSearchProducts: query=> dispatch(fetchSearchProducts(query))
})

export default connect(mSTP, mDTP)(Product)
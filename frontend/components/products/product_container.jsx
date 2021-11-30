import { connect } from "react-redux"
import Product from "./products"
import { fetchProducts, fetchSearchProducts } from "../../actions/product_action"

const mSTP = (state,ownProps)=> {
    
    return {
    products: Object.values(state.entities.products),
    query: ownProps.match.params.query
}}

const mDTP = dispatch =>({
    // fetchProducts: ()=> dispatch(fetchProducts()),
    fetchSearchProducts: query=> dispatch(fetchSearchProducts(query))
})

export default connect(mSTP, mDTP)(Product)
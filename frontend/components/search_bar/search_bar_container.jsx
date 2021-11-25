import { connect } from "react-redux"
import SearchBar from "./search_bar"
import { withRouter } from "react-router"
import {searchProducts} from '../../actions/product_action'


const mDTP = dispatch =>({
    searchProducts: query => dispatch(searchProducts(query))
    
})

export default withRouter(connect(null, mDTP)(SearchBar))
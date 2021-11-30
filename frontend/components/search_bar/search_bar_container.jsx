import { connect } from "react-redux"
import SearchBar from "./search_bar"
import { withRouter } from "react-router"
import {fetchSearchProducts} from '../../actions/product_action'


const mDTP = dispatch =>({
    fetchSearchProducts: query => dispatch(fetchSearchProducts(query))
    
})

export default withRouter(connect(null, mDTP)(SearchBar))
import { connect } from "react-redux"
import Category from "./category"
import { withRouter } from "react-router"
import { fetchSearchProducts } from '../../actions/product_action'


const mDTP = dispatch => {
    
    return{

        fetchSearchProducts: query => dispatch(fetchSearchProducts(query))
    }

}

export default withRouter(connect(null, mDTP)(Category))
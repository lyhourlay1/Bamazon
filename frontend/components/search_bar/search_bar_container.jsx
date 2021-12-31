import { connect } from "react-redux"
import SearchBar from "./search_bar"
import { withRouter } from "react-router"
import {fetchSearchProducts} from '../../actions/product_action'

const mSTP = ({ errors }) => {
    
    return {
        errors: errors.products
        // formType: 'signup',
        //navLink: <Link to="/login">log in instead</Link>,
    };
};

const mDTP = dispatch =>({
    fetchSearchProducts: query => dispatch(fetchSearchProducts(query))
    
})

export default withRouter(connect(mSTP, mDTP)(SearchBar))
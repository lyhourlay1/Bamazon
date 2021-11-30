import { connect } from "react-redux"
import { fetchProduct } from "../../actions/product_action"
import { createReview } from "../../actions/review_action"
import ReviewForm from './review_form'


const mSTP = (state , ownprops)=>{
    
    return {
        errors: state.errors.review,
        currentUser: state.session.currentUser,
        productId: ownprops.match.params.productId,
        product: state.entities.products[ownprops.match.params.productId]
    }
}

const mDTP = dispatch => ({
    createReview: (formReview)=> dispatch(createReview(formReview)),
    fetchProduct: productId => dispatch(fetchProduct(productId))
})

export default connect(mSTP, mDTP)(ReviewForm)
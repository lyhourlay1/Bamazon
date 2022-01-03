import {connect} from 'react-redux'
import { createNewUser, clearSessionErrors } from '../../actions/session_action'
import { createCart } from '../../actions/cart_action'

import Signup from './signup'

const mSTP = ({ errors }) => {
    
    return {
        errors: errors.session
        // formType: 'signup',
        //navLink: <Link to="/login">log in instead</Link>,
    };
};

const mDTP = dispatch=>({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    // createCart: userId => dispatch(createCart(userId))
    clearSessionErrors: () => dispatch(clearSessionErrors()),

})

export default connect(mSTP, mDTP)(Signup)
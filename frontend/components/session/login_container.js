import Login from './login'
import { connect } from 'react-redux'
import {login, clearSessionErrors} from '../../actions/session_action'

const mSTP = ({errors}) =>({
    errors: errors.session

})
const mDTP = dispatch=>({
    login: formUser => dispatch(login(formUser)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),

})

export default connect(mSTP, mDTP)(Login)
import Login from './login'
import { connect } from 'react-redux'
import {login} from '../../actions/session_action'


const mDTP = dispatch=>({
    login: formUser => dispatch(login(formUser))
})

export default connect (null, mDTP)(Login)
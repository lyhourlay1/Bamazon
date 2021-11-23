import { connect } from "react-redux";
import React from 'react'
import NavBar from './nav_bar'
import {logout,demoLogin} from '../../actions/session_action'

const mSTP = state => ({
    currentUser: state.session.currentUser,
    demoUser: {username: "demo", password:'password'}
})

const mDTP = dispatch=> ({
    logout: ()=> dispatch(logout()),
    demoLogin: formUser => dispatch(demoLogin(formUser))
})


export default connect(mSTP, mDTP)(NavBar)
import { connect } from "react-redux";
import React from 'react'
import NavBar from './nav_bar'
import {logout,demoLogin} from '../../actions/session_action'
import { fetchCart } from "../../actions/cart_action"


const mSTP = state => {
    
    return{
        currentUser: state.session.currentUser,
        demoUser: {username: "demo", password:'password'},
        cart: state.entities.cart,


    }
}

const mDTP = dispatch=> ({
    logout: ()=> dispatch(logout()),
    demoLogin: formUser => dispatch(demoLogin(formUser)),
    fetchCart: userId => dispatch(fetchCart(userId)),
})


export default connect(mSTP, mDTP)(NavBar)
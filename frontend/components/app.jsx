import React from 'react'
import SignupContainer from "./session/signup_container"
import LoginContainer from './session/login_container'
import NavBarContainer from './nav_bar/nav_bar_container'
import Cart from './cart/cart'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'

import {Route} from 'react-router-dom'

export default ()=> (
    <div>
        <Route path="/" component={NavBarContainer} />
        <AuthRoute path="/signup" component={SignupContainer}/>
        <AuthRoute path="/login" component={LoginContainer}/>
    </div>
)
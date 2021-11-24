import React from 'react'
import SignupContainer from "./session/signup_container"
import LoginContainer from './session/login_container'
import NavBarContainer from './nav_bar/nav_bar_container'
import ProductContainer from './products/product_container.jsx'
import ProductShowContainer from './products/product_show_container'
import Cart from './cart/cart'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import {Route, Switch} from 'react-router-dom'
import Splash from './splash'

export default ()=> (
    <div>
        <Switch>
            <AuthRoute path="/signup" component={SignupContainer}/>
            <AuthRoute path="/login" component={LoginContainer}/>
            <Route path="/products/:productId" component= {ProductShowContainer}/>
            <Route path="/" component={Splash} />

        </Switch>
    </div>
)
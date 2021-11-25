import React from 'react'
import SignupContainer from "./session/signup_container"
import LoginContainer from './session/login_container'
import ProductShowContainer from './products/product_show_container'
import CartContainer from './cart/cart_container'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import {Route, Switch} from 'react-router-dom'
import Splash from './splash'

export default ()=> (
    <div>
        <Switch>
            <AuthRoute path="/signup" component={SignupContainer}/>
            <AuthRoute path="/login" component={LoginContainer}/>
            {/* <ProtectedRoute exact path="/search/:query" component={ProductIndexContainer} /> */}
            <Route path="/products/:productId" component= {ProductShowContainer}/>
            <Route path="/cart" component= {CartContainer}/>
            <Route path="/" component={Splash} />

        </Switch>
    </div>
)
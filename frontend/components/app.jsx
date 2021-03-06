import React from 'react'
import SignupContainer from "./session/signup_container"
import LoginContainer from './session/login_container'
import ProductShowContainer from './products/product_show_container'
import CartContainer from './cart/cart_container'
import TransactionContainer from './transactions/transaction_container'
import ReviewFormContainer from './reviews/review_form_container'
import ProductContainer from './products/product_container'
import Errors from './error/errors'
import { AuthRoute, ProtectedRoute } from '../util/route_utils'
import {Route, Switch} from 'react-router-dom'
import Splash from './splash'

export default ()=> (
    <div>
        <Switch>
            <AuthRoute path="/signup" component={SignupContainer}/>
            <AuthRoute path="/login" component={LoginContainer}/>
            <Route exact path="/search/:query" component={ProductContainer} />
            <Route exact path="/errors" component={Errors} />
            <Route path="/products/:productId" component= {ProductShowContainer}/>
            <Route path="/reviewForm/:productId" component= {ReviewFormContainer}/>
            <ProtectedRoute path="/transactions/" component= {TransactionContainer}/>
            <ProtectedRoute path="/carts/" component= {CartContainer}/>
            <Route path="/" component={Splash} />
        </Switch>
    </div>
)
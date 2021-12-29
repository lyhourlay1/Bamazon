import React from 'react'
import { createNewUser } from '../../actions/session_action'
import { Link } from 'react-router-dom';
import SearchBarContainer from '../search_bar/search_bar_container';
// import CartContainer from '../cart/cart_container'
import CategoryContainer from '../category/category_container';

class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    componentDidMount() {
        if (this.props.currentUser){
            this.props.fetchCart(this.props.currentUser.id)
        }
    }

    handleSubmit(e){
        e.preventDefault()
        
        this.props.demoLogin(this.props.demoUser)
        //.then(() => this.props.history.push('/'));
    }
    render(){
        const {currentUser, logout} = this.props
        const display = currentUser ? (
            <div>
                <h3>Welcome {currentUser.username}!</h3>
                <button onClick={logout} >Logout</button>
            </div>
        ) : (
            <div className ='hover-to-auth'>Hello, Sign In
                <div className= "auth-home">
                    <div className='drop-down-content'>
                        <button className="sign-in-button">
                            <Link className="sign-in-butt" to="/login">Sign in</Link>
                        </button>
                    </div>
                    <div className='drop-down-content'>
                        <div>
                            New Customer?  
                            <Link id="link-ref" to="/signup"> Start here</Link>
                        </div>
                    </div>
                    <div>
                        <button className='demo-sign-in' onClick={ this.handleSubmit}>
                            Demo Sign-in
                        </button>
                    </div>
                </div>
            </div>
        );
        
        return(
            <div className='header'>

                <header className= 'nav-bar'>
                    <div className= 'logo'>
                        <Link className="home-button" to={`/`}>
                            <img src="images/bamazonLogo.png" className= 'bamazon-logo-home'   
                                height="45px"/>
                        </Link>
                    </div>
                    {/* <div className= 'search-bar'> */}
                        <SearchBarContainer/>
                    {/* </div> */}
                    <div className='right-flex'>
                        <div className ='display-wrapper'>
                            {display}
                        </div>
                        <div className= 'recent-order'>
                            <Link className="orders-button" to={`/transactions/`}>
                                Recent Orders
                            </Link>
                        </div>
                        <div className='cart'>
                            <Link className="cart-button" to={`/carts/`}> 
                            <img src="images/shop_cart.png" className='shopping-cart'/>
                            </Link>
                        </div>
                    </div>
                </header>
                <header className='category-nav-bar'>
                    <CategoryContainer/>
                </header>
            </div>
        )
    }
}

export default NavBar
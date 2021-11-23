import React from 'react'
import { createNewUser } from '../../actions/session_action'
import { Link } from 'react-router-dom';
// import './../styles/nav_bar.css'

class NavBar extends React.Component{
    constructor(props){
        super(props)
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
                        <button className="sign-in-button">
                        <Link className="sign-in-butt" to="/login">Sign in</Link>
                    </button>
                    <br />
                        New Customer?  
                        <Link className="btn" to="/signup"> Start here</Link>
                </div>

            </div>
        );
        return(
            <header className= 'nav-bar'>
                <h1 className= 'logo'> Bamazon</h1>
                <div>
                    {display}
                </div>
            </header>
        )
    }
}

export default NavBar
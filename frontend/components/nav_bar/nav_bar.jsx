import React from 'react'
import { createNewUser } from '../../actions/session_action'
import { Link } from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {currentUser, logout} = this.props
        //console.log(currentUser)
        const display = currentUser ? (
            <div>
                <h3>Welcome {currentUser.username}!</h3>
                <button onClick={logout}>Logout</button>
            </div>
        ) : (
            <div>
                <Link className="btn" to="/signup">Sign Up</Link>
                <Link className="btn" to="/login">Log In</Link>
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
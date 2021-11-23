import React from 'react'
import { createNewUser } from '../../actions/session_action'
import { Link } from 'react-router-dom';
// import './../styles/nav_bar.css'

class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        
        this.props.demoLogin(this.props.demoUser).then(() => this.props.history.push('/'));
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
                            <Link className="btn" to="/signup"> Start here</Link>
                        </div>
                    </div>
                    <div>
                        <button className='demo-sign-in' onClick={ this.handleSubmit}>
                            demo Sign-in
                        </button>
                    </div>
                </div>
            </div>
        );
        return(
            <header className= 'nav-bar'>
                <h1 className= 'logo'> Bamazon</h1>
                <div className ='display-wrapper'>
                    {display}
                </div>
            </header>
        )
    }
}

export default NavBar
import React from 'react'
import { Link } from 'react-router-dom';

class Signup extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            username: "",
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    update(field){
        return (e)=>{
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();    
        this.props.createNewUser(this.state).then(() => this.props.history.push('/'));
    }

    renderErrors() {
        return (
            <div className="session-errors">
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    render(){
        return (
            <div className = "session-form">
                <Link className="home" to="/s">
                    <img src="images/bamazon_Authlogo.png" className='amazon-logo' />
                </Link>
                <div className='auth-container'>
                    <h2 className='padding' id='auth-heading'>Sign Up!</h2>
                    <h2 className='padding'>
                        {this.renderErrors()}
                    </h2>
                    <form >
                        <div className='padding'>
                            <h4>Username</h4>
                            <input type="text" value={this.state.username} onChange={this.update('username')} id='input-box'/>
                        </div>
                        <div className='padding'>
                            <h4>Email</h4>
                            <input type="text" value={this.state.email} onChange={this.update('email')} id='input-box'/>
                        </div>
                         <div className='padding'>
                            <h4>Password</h4>
                            <input type="password" value={this.state.password} onChange={this.update('password')} id='input-box'/>
                        </div>
                        <div className='padding'>
                            <button onClick={this.handleSubmit}>Sign Up</button>
                        </div>
                    </form>
                    <p className='padding'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <div className='padding'>
                        Already have an account? 
                        <Link className="sign-in0link" to="/login" className='underscore'> Sign-in</Link>               
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup
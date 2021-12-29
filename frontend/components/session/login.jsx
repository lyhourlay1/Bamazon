import React from 'react'
import { Link } from 'react-router-dom';

class Login extends React.Component{

    constructor(props){
        super(props)

        this.state={
            username: "",
            password: ""
        }
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    update(field){
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }
    renderErrors() {
        return (
            <div className = "session-errors">
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

    handleSubmit(e){
        e.preventDefault();
        this.props.login(this.state).then(() => this.props.history.push('/'));
    }
    render(){
        return(
            <div className= 'session-form'>
                <Link className="home" to="/">
                    <img src="images/bamazon_Authlogo.png" className='amazon-logo'/>
                </Link>
                <div className='auth-container'>
                    <h2 className='padding' id='auth-heading'>Sign-In!</h2>
                    <h2 className='padding'>{this.renderErrors()}</h2>
                    <form >
                        <div className='padding'>
                            <h4>Username</h4>
                            <input type="text" value={this.state.username} onChange={this.update('username')} id='input-box'/>
                        </div >
                        <div className='padding'>
                            <h4>Password</h4>
                            <input type="text" value={this.state.password} onChange={this.update('password')} id='input-box'/>
                        </div>
                        <div className='padding'>
                            <button onClick={this.handleSubmit} >Log in</button>
                        </div>
                    </form>
                    <p className='padding'>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <div className='padding'>
                        <button >
                                <Link className="btn" to="/signup">Create your Bamazon Account</Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
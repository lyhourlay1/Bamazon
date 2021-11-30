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
                <header>                        
                    <Link className="home" to="/">
                        <img src="images/bamazon_Authlogo.png" className='amazon-logo'/>
                    </Link>
                </header>
                <h2>Sign-In!</h2>
                {this.renderErrors()}
                <form >
                    <label>Username
                        <input type="text" value={this.state.username} onChange={this.update('username')} />
                    </label>
                    <br />
                    <label>Password
                        <input type="text" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <br />
                    <button onClick={this.handleSubmit}>Log in</button>
                </form>
                <div>
                    <button>
                        <Link className="btn" to="/signup">Create you Bamazon Account</Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default Login
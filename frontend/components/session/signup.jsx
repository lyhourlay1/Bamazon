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
                <header>
                    <Link className="home" to="/s">
                        <img src="images/bamazon_Authlogo.png" className='amazon-logo' />
                    </Link>
                </header>
                <h2>Sign Up!</h2>
                {this.renderErrors()}
                <form >
                    <label>Username
                        <input type="text" value={this.state.username} onChange= {this.update('username')}/>
                    </label>
                    <br />
                    <label>Email
                        <input type="text" value={this.state.email} onChange= {this.update('email')}/>
                    </label>
                    <br />
                    <label>Password
                        <input type="password" value={this.state.password} onChange= {this.update('password')}/>
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
                <div>
                    Already have an account? 
                    <Link className="btn" to="/login"> Sign-in</Link>               
                </div>
            </div>
        )
    }
}

export default Signup
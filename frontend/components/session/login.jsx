import React from 'react'
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
            <div className = "errors">
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
                <h2>Log In!</h2>
                {this.renderErrors()}
                <form>
                    <label>Username
                        <input type="text" value={this.state.username} onChange={this.update('username')} />
                    </label>
                    <label>Password
                        <input type="text" value={this.state.password} onChange={this.update('password')} />
                    </label>
                    <button onClick={this.handleSubmit}>Log in</button>
                </form>
            </div>
        )
    }
}

export default Login
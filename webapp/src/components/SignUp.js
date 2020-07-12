import React, {Component } from 'react';
import './Sign.css';


class SignUp extends Component{
    
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
    }

    render(){
        return (
            <div className="ui container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create A New Account</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="firstName">
                        <label htmlFor="firstName">First Name</label>
                        <input type="firstName" id="firstName" onChange={this.handleChange} />
                    </div>
                    <div className="LastName">
                        <label htmlFor="LastName">First Name</label>
                        <input type="LastName" id="LastName" onChange={this.handleChange} />
                    </div>
                    
                    <div className="input-field">
                        <button >Sign Up</button>
                    </div>
                </form>
            </div>
        );
    };

};

export default SignUp;

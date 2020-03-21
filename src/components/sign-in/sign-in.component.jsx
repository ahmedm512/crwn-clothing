import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: '' });
    }

    handleChange = event => {
        const {value, name} = event.target;
    this.setState({[name]: value});
    
    }
    render() {
        return (
            <div className='sign-in'>
              <h2>I already have an account</h2> 
              <spam>Sign in with your email and password</spam>
            
            <form onSubmit={this.handleSubmit}>
            <FormInput  
                    label='Email'
                    name="email" 
                    type="email" 
                    value={this.state.email} 
                    required 
                    onChange={this.handleChange}
                    />
            <FormInput  
                    label="Password"
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    required 
                    onChange={this.handleChange}
                    />
            <CustomButton type='submit' >Sign In</CustomButton>
            </form>
            
            </div>
        );
    }
}

export default SignIn;
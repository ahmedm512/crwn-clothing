import React, { Component } from 'react';
import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../../components/custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utlis'
// import { signInWithFaceBook } from '../../firebase/firebase.utlis'
import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:'', password: ''});
        } catch (error){
            console.log(error);
        }
    };

    handleChange = event => {
        const {value, name} = event.target;
    this.setState({[name]: value});
    
    }
    render() {
        return (
            <div className='sign-in'>
              <h2>I already have an account</h2> 
              <span>Sign in with your email and password</span>
            
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
            <div className='buttons'>
            <CustomButton type='submit' >Sign In</CustomButton>
            <CustomButton onClick={ signInWithGoogle } isGoogleSignIn> SIGN IN WITH GOOGLE </CustomButton>
            </div>
            </form>
            </div>
            
        );
    }
}

export default SignIn;
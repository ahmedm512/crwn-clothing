import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utlis'

import {ReactComponent as Logo} from '../../assests/4.3 crown.svg.svg'

import './header.styles.scss'

class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {
     const {currentUser} = this.props;
        return (
            <div className='header'>
                <Link className='logo-container' to="/">
                <Logo className='logo' />
                </Link>
                <div className='options'>
                <Link className='option link' to='/shop'>
                SHOP 
                </Link>
                <Link className='option' to='/shop'>
                CONTACT
                </Link>
                <Link >
                {
                    currentUser ? 
                    <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div> 
                    :      
                    <Link className='option' to='/signin'>
                    SIGN IN
                    </Link>
                }
                </Link>
                </div>
            </div>
        );
    }
}

export default Header;
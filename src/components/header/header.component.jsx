import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assests/4.3 crown.svg.svg'
import './header.styles.scss'

class Header extends Component {
    // constructor(){
    //     super();
    // }

    render() {
        return (
            <div className='header'>
                <Link className='logo-container' to="/">
                <Logo className='logo' />
                </Link>
                <div className='options'>
                <Link className='option f6 link grow ph3 pv2 mb2 dib white bg-black' to='/shop'>
                SHOP 
                </Link>
                <Link className='option f6 link grow ph3 pv2 mb2 dib white bg-black' to='/shop'>
                CONTACT
                </Link>
                </div>
            </div>
        );
    }
}

export default Header;
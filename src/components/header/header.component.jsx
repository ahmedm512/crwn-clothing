import React from 'react';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utlis';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../../components/cart-icon/cart-icon.componnet';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import {ReactComponent as Logo} from '../../assests/4.3 crown.svg.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selector';


import './header.styles.scss'


const Header = ({currentUser, hidden}) => {
    return (

        
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP 
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
        {
            currentUser ? 
            (<div className='option' onClick={() => auth.signOut()}> 
                SIGN OUT
            </div>) 
            :      
            (<Link className='option' to='/signin'>
            SIGN IN
            </Link>)
        }
        <CartIcon />
        </div>
        { 
            hidden ? (null) : (<CartDropdown />)
        }
    </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
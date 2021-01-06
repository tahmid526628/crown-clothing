import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.style.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';

// firebase
import { auth } from '../../firebase/firebase.utils'; // this import needed for signin and signout authentication

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/contact">
                CONTACT
            </Link>
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()} >SIGN OUT</div>
                :
                <Link className="option" to="/signin">SIGN IN</Link>
            }
        </div>
    </div>
);


// the first argument of connect() method and the second argument will be in the App.js
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

// so we need to upgrade Header with the connect() method to conect with the redux functionality
export default connect(mapStateToProps)(Header);
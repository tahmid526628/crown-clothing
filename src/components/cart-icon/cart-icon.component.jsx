import React from 'react';
import { connect } from 'react-redux';

import './cart-icon.style.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import {selectCartItemCount} from '../../redux/cart/cart.selector';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={ toggleCartHidden }>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{ itemCount }</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
    // here a message, this function is called every time when redux any action happen
    // console.log("I'm called"); // ei line shob action like cart baade user action eo call hobe
    // but eta good practice na
    // etar jonno ekta library ase. Reselect Library
    itemCount: selectCartItemCount(state)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);
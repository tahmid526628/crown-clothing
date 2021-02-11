import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.style.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartDropdown = ({ cart_items, history, dispatch }) => {
    // console.log(otherProps);
    return(
    <div className="cart-dropdown">
        <div className="cart-items" >
            {
                cart_items.length ?
                (cart_items.map((cart_item) => (<CartItem key={ cart_item.id } item={ cart_item }/>)))
                : (<span className="empty-message">Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)};

const mapStateToProps = createStructuredSelector({
    cart_items: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
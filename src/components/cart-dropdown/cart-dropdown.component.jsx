import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.style.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selector';

const CartDropdown = ({ cart_items }) => (
    <div className="cart-dropdown">
        <div className="cart-items" >
            {
                cart_items.map((cart_item) => (<CartItem key={ cart_item.id } item={ cart_item }/>))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cart_items: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
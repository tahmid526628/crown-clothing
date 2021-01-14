import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.style.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

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

const mapStateToProps = ({ cart: { cart_items } }) => ({
    cart_items
});

export default connect(mapStateToProps)(CartDropdown);
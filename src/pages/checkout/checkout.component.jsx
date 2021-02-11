import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.style.scss';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe/stripe-button.component';

const CheckoutPage = ({cart_items, total}) => (
    <div className="checkout-page">
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cart_items.length ? (cart_items.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />))) 
            : 
            (<span className='empty-message'>Your cart is empty</span>)
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
        <div className='test-warning'>
            For Test Payment <br/>
            Card No: 4263982640269299 <br/>
            Expiry: 02/2023 <br/>
            CVC: 837
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cart_items: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100; // cause stripe take cents
    const publishableKey = 'pk_test_51IJfJTIWDFwRF2BWvmqHfNwTEbSnAjM4HcvVyNMphj5PTiGEZ0xovGhDJ3cJ34AMPFPiZNekdZpwJHYueMrEMFKo00yNuEYyqh';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Crown Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}


export default StripeCheckoutButton;
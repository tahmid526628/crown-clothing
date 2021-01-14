import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => ( //children mean the thing between tags e.g. <button>children</button>
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton; 
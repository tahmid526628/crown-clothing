import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => ( //children mean the thing between tags e.g. <button>children</button>
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton; 
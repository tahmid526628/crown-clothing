import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.style.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-items`}  onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={
            {
                backgroundImage: `url(${imageUrl})`
            }
        } /> 
        {/* for background image we have to create another component(div) cause  
        we'll give this background hovering effect and etc. If we don't separate it then 
        when we hover all the menu items will grow bigger. But we don't want that
        that is why background image and content  divs are need to be separate. Thank you :)
        */}
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='sub-tille'>Shop Now</span>
        </div>
    </div>
)

export default withRouter( MenuItem );

// here withRouter is a Higher Order method by which we can have the access of url props.
// otherwise we have to pass through the homepage cause homepage has the only access to url props
// homepage is the chiled of App.js and we set up routing in App.js. that is why only it has the access. 
// but if we do this then we have to pass the history props in every component until menu item component
// so better that we use withRouter from react router dom and use it while exporting. 
// Thank You :)
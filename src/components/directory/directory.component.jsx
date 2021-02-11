import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './directory.style.scss';
import MenuItem from '../menu-item/menu-item.component';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

const Directory = ({ sections }) => ( 
    <div className="directory-menu">
        {
            /*this.state.sections.map(({ title, id, imageUrl, size, link }) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} link={link} />
                // passing size, cause we want to make the last two menu items bigger than others
            ))*/
            sections.map(({ id, ...otherSectionsProps}) => (
                <MenuItem key={ id } {...otherSectionsProps}/>
            ))
            // these two are the same
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});


export default connect(mapStateToProps)(Directory);
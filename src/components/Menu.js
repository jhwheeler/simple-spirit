import React from 'react';
import Share from './Share';
import Hamburger from './Hamburger';

class Menu extends React.Component {
    render() {
        return(
            <div className="menu">
                <Share/>
                <Hamburger/>
            </div>
        );
    }
}

export default Menu;

import React from 'react';

import logoIcon from '../../public/images/logo.png';
import challengeIcon from '../../public/images/challenge.png';

class Header extends React.Component {
    render() {
        const logo = this.props.logoType === "logo" ? logoIcon : challengeIcon;
        return(
            <div className="header">
                <img src={logo}/>
            </div>
        );
    }
}

export default Header;

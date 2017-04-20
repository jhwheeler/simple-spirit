import React from 'react';
import { Link } from 'react-router-dom';

import logoIcon from '../../public/images/logo.png';

class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <Link to="/" aria-label="Simple Spirit Homepage">
          <img src={logoIcon} alt="Simple Spirit"/>
        </Link>
      </div>
    );
  }
}

export default Header;

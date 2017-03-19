import React from 'react';

import logoIcon from '../../public/images/logo.png';

class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <img src={logoIcon}/>
      </div>
    );
  }
}

export default Header;

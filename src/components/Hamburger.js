import React from 'react';
import { Link } from 'react-router-dom';
import hamburgerImage from '../../public/images/menu.png';

class Hamburger extends React.Component {
  render() {
    return(
      <div className="hamburger">
        <Link to="/login" className="menu-link"><img src={hamburgerImage} /></Link>
      </div>
    );
  }
}

export default Hamburger;

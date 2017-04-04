import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  render() {
    return(
      <div className="menu row">
          <div className="col-3-always menu-link-div">
            <Link to="/login" className="login-link">Login</Link>
          </div>
          <div className="col-3-always menu-link-div">
            <Link to="/about" className="about-link">About</Link>
          </div>
          <div className="col-3-always menu-link-div">
            <Link to="/" className="share-link">Share</Link>
          </div>
          <div className="col-3-always menu-link-div">
            <Link to="/archive" className="archive-link">Archive</Link>
          </div>
      </div>
    );
  }
}

export default Menu;

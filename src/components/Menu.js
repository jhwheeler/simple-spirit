import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  render() {
    return(
      <div className="menu">
        <div className="row">
          <div className="col-4">
            <Link to="/" className="share-link">Share</Link>
          </div>
          <div className="col-4">
            <Link to="/archive" className="archive-link">Archive</Link>
          </div>
          <div className="col-4">
            <Link to="/login" className="login-link">Login</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;

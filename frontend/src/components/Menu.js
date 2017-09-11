import React from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends React.Component {
  render() {
    return(
      <div className="menu row">
          <div className="col-3-always menu-link-div">
            <Link to="/" className="home-link menu-link">Home</Link>
          </div>
          <div className="col-3-always menu-link-div">
            <Link to="/inquiries" className="archive-link menu-link">Inquiries</Link>
          </div>
      </div>
    );
  }
}

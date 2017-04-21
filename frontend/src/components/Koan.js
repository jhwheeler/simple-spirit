import React from 'react';
import { Link } from 'react-router-dom';

class Koan extends React.Component {
  render() {
    if (this.props.link) {
      return (
        <div className="koan">
          <div className="koan-content">
            <Link to={this.props.link}>
              <p>{this.props.quote}</p>
            </Link>
          </div>
        </div>
      );
    } else {
        return (
          <div className="koan">
            <div className="koan-content">
              <p>{this.props.quote}</p>
            </div>
          </div>
      );
    }
  }
}

export default Koan;

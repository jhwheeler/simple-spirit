import React from 'react';
import { Link } from 'react-router-dom';

class Maxim extends React.Component {
  render() {
    if (this.props.link) {
      return (
        <div className="maxim">
          <div className="maxim-content">
            <Link to={this.props.link}>
              <p>{this.props.quote}</p>
            </Link>
          </div>
        </div>
      );
    } else {
        return (
          <div className="maxim">
            <div className="maxim-content">
              <p>{this.props.quote}</p>
            </div>
          </div>
      );
    }
  }
}

export default Maxim;

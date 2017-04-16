import React from 'react';
import { Link } from 'react-router-dom';

class Challenge extends React.Component {
  render() {
    return(
      <div className="challenge slideDown">
        <div className="row">
          <div className="challenge-content">
            <h3>Challenge:</h3>
            <p>{this.props.content}</p>
            <Link to="/about">
              <p className="explanation">What is this?</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Challenge;

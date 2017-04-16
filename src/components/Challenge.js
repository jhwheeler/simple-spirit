import React from 'react';
import { Link } from 'react-router-dom';

class Challenge extends React.Component {
  render() {
    return(
      <div className="challenge fade-in">
        <div className="row">
          <div className="challenge-content">
            <h3>Challenge:</h3>
            <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Challenge;

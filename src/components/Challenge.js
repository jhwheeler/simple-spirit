import React from 'react';

class Challenge extends React.Component {
  render() {
    return(
      <div className="challenge">
        <div className="row">
          <div className="challenge-content">
            <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Challenge;

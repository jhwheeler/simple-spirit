import React from 'react';
import ExperienceRecording from './ExperienceRecording';

class Challenge extends React.Component {
  render() {
    return(
      <div className="challenge">
        <div className="row">
          <div className="col-10 challenge-content">
            <p>{this.props.content}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <ExperienceRecording/>
          </div>
        </div>
      </div>
    );
  }
}

export default Challenge;

import React from 'react';
import ExperienceRecording from './ExperienceRecording';

class Challenge extends React.Component {
  constructor() {
    super();
    this.toggleTextArea = this.toggleTextArea.bind(this);
    this.state = {
      showTextarea: false
    }
  }

  toggleTextArea(event) {
    let { showTextArea } = this.state;
    this.setState({
      showTextArea: !showTextArea,
    });
  }

  render() {
    const { showTextArea } = this.state;
    return(
      <div className="challenge">
        <div className="row">
          <div className="col-8 offset-2 challenge-content">
            <p>{this.props.content}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-2 experience-button-wrapper">
            <button className="experience-button" onClick={this.toggleTextArea}>
              Share your experience
            </button>
          </div>
          <div className="row">
            <div className="col-8 offset-2">
              { showTextArea && (
                <ExperienceRecording/>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Challenge;

import React from 'react';
import arrow from '../../public/images/arrow.png';

class Prompt extends React.Component {
  render() {
    return(
      <div className="prompt">
        <button className="prompt-button" onClick={() => this.props.onClick()}>
          {this.props.prompt}
          <img className="arrow" src={arrow}/>
        </button>
      </div>
    );
  }
}

export default Prompt;

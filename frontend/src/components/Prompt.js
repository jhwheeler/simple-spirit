import React from 'react';
import arrow from '../../public/images/arrow.png';

export default class Prompt extends React.Component {
  render() {
    return(
      <div className="prompt row">
        <button className="prompt-button" onClick={() => this.props.onClick()}>
          <div className="prompt-button-text">
            {this.props.prompt}
          </div>
          <img className="arrow" src={arrow}/>
        </button>
      </div>
    );
  }
}

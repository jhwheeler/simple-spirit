import React from 'react';
import arrow from '../../public/images/arrow.png';

export default class Prompt extends React.Component {
  render() {
    return(
      <div className="prompt row">
        <button className="button prompt-button" onClick={() => this.props.onClick()}>
          <p className="prompt-button-text">{this.props.prompt}</p>
        </button>
      </div>
    );
  }
}

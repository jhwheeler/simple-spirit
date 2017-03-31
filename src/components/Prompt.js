import React from 'react';
import arrow from '../../public/images/arrow.png';

class Prompt extends React.Component {
  render() {
    return(
      <div className="prompt row">
        <div className="col-4">
          <button className="prompt-button" onClick={() => this.props.onClick()}>
            {this.props.prompt}
            <img className="arrow" src={arrow}/>
          </button>
        </div>
      </div>
    );
  }
}

export default Prompt;

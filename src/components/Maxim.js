import React from 'react';

class Maxim extends React.Component {
  render() {
    return(
      <div className="maxim">
        <div className="row">
          <div className="col-8 offset-2 maxim-content">
            <p>{this.props.quote}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Maxim;

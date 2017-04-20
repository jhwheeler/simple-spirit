import React from 'react';
import { Link } from 'react-router-dom';

class Inquiry extends React.Component {
  render() {
    return(
      <div className="inquiry fade-in">
        <div className="row">
          <div className="inquiry-content">
            <h3>Inquiry:</h3>
            <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Inquiry;

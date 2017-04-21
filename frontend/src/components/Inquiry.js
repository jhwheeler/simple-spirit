import React from 'react';
import { Link } from 'react-router-dom';
import Write from './Write'

export default class Inquiry extends React.Component {
  constructor() {
    super();
    this.openWrite = this.openWrite.bind(this);
    this.state = {
      write: "off"
    }
  }

  openWrite(event) {
    let write = this.state.write;
    this.setState({
      write: write == "off" ? "on" : "off"
    })
  }

  render() {
    let write = null;
    if (this.state.write == "on") {
      write = <Write/>;
    } else {
      write = null;
    }
    return(
      <div className="inquiry fade-in">
        <div className="row">
          <div className="inquiry-content">
            <h3>Inquiry</h3>
            <p>{this.props.content}</p>
          </div>
          <button className="button" onClick={this.openWrite}>Write</button>
        </div>
        <div className="row">
          {write}
        </div>
      </div>
    );
  }
}

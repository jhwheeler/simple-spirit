import React from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

class Console extends React.Component {
  constructor() {
    super();

    this.state = {
      koan: "",
      inquiry: "",
      koanId: null
    }
  }

  handleKoanChange = (e) => {
    this.setState({koan: e.target.value});
  }

  handleInquiryChange = (e) => {
    this.setState({inquiry: e.target.value});
  }

  postKoan = (e) => {
    e.preventDefault();
    api.postKoan(this.state.koan, this.state.inquiry, this.state.koanId).end((err, res) => {console.log("Posting Koan/Inquiry")});
  }

  render() {
    return (
      <div className="console">
        <div className="row">
          <h2>Welcome to the Admin Console</h2>
        </div>
        <div className="row">
          <form id="console-form" className="console-form" onSubmit={this.postKoan}>
            <fieldset>
              <label htmlFor="post-koan" className="console-label">Post a New Koan</label>
              <textarea name="post-koan" className="console-textarea" required onChange={this.handleKoanChange}></textarea>
              <label htmlFor="post-inquiry" className="console-label">Post a New Inquiry</label>
              <textarea name="post-inquiry" className="console-textarea" required onChange={this.handleInquiryChange}></textarea>
            </fieldset>
            <input type="submit" className="button" value="Post"/>
            <br/>
            <a className="logout-link" href="/logout"><p>Logout</p></a>
          </form>
        </div>
      </div>
    );
  }
}

export default Console;

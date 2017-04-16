import React from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

class Console extends React.Component {
  constructor() {
    super();

    this.state = {
      maxim: "",
      challenge: "",
      maximId: null
    }
  }

  handleMaximChange = (e) => {
    this.setState({maxim: e.target.value});
  }

  handleChallengeChange = (e) => {
    this.setState({challenge: e.target.value});
  }

  postMaxim = (e) => {
    e.preventDefault();
    api.postMaxim(this.state.maxim, this.state.challenge, this.state.maximId).end((err, res) => {console.log("Posting Maxim/Challenge")});
  }

  render() {
    return (
      <div className="console">
        <div className="row">
          <h2>Welcome to the Admin Console</h2>
        </div>
        <div className="row">
          <form id="console-form" className="console-form" onSubmit={this.postMaxim}>
            <fieldset>
              <label htmlFor="post-maxim" className="console-label">Post a New Maxim</label>
              <textarea name="post-maxim" className="console-textarea" required onChange={this.handleMaximChange}></textarea>
              <label htmlFor="post-challenge" className="console-label">Post a New Challenge</label>
              <textarea name="post-challenge" className="console-textarea" required onChange={this.handleChallengeChange}></textarea>
            </fieldset>
            <input type="submit" className="button" value="Post"/>
            <Link to="/logout" className="logout">
              <p>Logout</p>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Console;

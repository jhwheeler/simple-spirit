import React from 'react';
import { Link } from 'react-router-dom';

import api from '../api';

class RegisterForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      password: ""
    }
  }

  handleUserChange = (e) => {
    this.setState({username: e.target.value});
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value});
  }

  handlePasswordChange = (e) => {
    this.setState({password: e.target.value});
  }

  postUser = (e) => {
    e.preventDefault();
    api.postUser(this.state.username, this.state.email, this.state.password).end((err, res) => {console.log("Posting User")});
  }

  render() {
    return(
      <form id="register" className="register" onSubmit={this.postUser}>
        <fieldset name="register-info">
            <label htmlFor="username" className="visually-hidden">Username</label>
            <br/>
            <input className="user-input" type="text" name="username" placeholder="username" id="username" onChange={this.handleUserChange}></input>
            <br/>
            <label htmlFor="email" className="visually-hidden">Email</label>
            <br/>
            <input className="email-input" type="text" name="email" placeholder="email" id="email" onChange={this.handleEmailChange}></input>
            <br/>
            <label htmlFor="password" className="visually-hidden">Password</label>
            <br/>
            <input className="pass-input" type="password" name="password" placeholder="password" id="password" onChange={this.handlePasswordChange}></input>
        </fieldset>
        <input type="submit" className="register-button" value="create"/>
        <Link to="/login"><p className="already-user">Already a user? Login</p></Link>
      </form>
    );
  }
}

export default RegisterForm;

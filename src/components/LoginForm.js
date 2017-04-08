import React from 'react';
import { Link } from 'react-router-dom';

import api from '../api';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    }
  }

  handleUser = (e) => {
    this.setState({username: e.target.value});
  }

  handlePassword = (e) => {
    this.setState({password: e.target.value});
  }

  loginUser = (e) => {
    e.preventDefault();
    api.loginUser(this.state.username, this.state.password).end((err, res) => {console.log("Logging User")});
  }

  render() {
    return(
      <form id="login" className="login" onSubmit={this.loginUser}>
        <fieldset name="login-info">
            <label htmlFor="user" className="visually-hidden">User</label>
            <br/>
            <input className="user-input" type="text" name="user" placeholder="user" id="user" onChange={this.handleUser}/>
            <br/>
            <label htmlFor="password" className="visually-hidden">Password</label>
            <br/>
            <input className="pass-input" type="password" name="password" placeholder="pass" id="password" onChange={this.handlePassword}/>
        </fieldset>
        <input type="submit" className="login-button" value="open"/>
        <Link to="/register"><p className="register-link">Register</p></Link>
      </form>
    );
  }
}

export default LoginForm;

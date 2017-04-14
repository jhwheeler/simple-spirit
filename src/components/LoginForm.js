import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  render() {
    return(
      <form action="/login" method="post" id="login" className="login">
        <fieldset name="login-info">
            <label htmlFor="username" className="visually-hidden">User</label>
            <br/>
            <input className="user-input" type="text" name="username" placeholder="user" id="username"/>
            <br/>
            <label htmlFor="password" className="visually-hidden">Password</label>
            <br/>
            <input className="pass-input" type="password" name="password" placeholder="pass" id="password"/>
        </fieldset>
        <input type="submit" className="login-button" value="open"/>
      </form>
    );
  }
}

export default LoginForm;

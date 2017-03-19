import React from 'react';

class LoginForm extends React.Component {
  render() {
    return(
      <form className="login">
        <fieldset name="login-info">
            <label htmlFor="user" className="visually-hidden">User</label>
            <br/>
            <input className="user-input" type="text" name="user" placeholder="user" id="user"></input>
            <br/>
            <label htmlFor="password" className="visually-hidden">Password</label>
            <br/>
            <input className="pass-input" type="password" name="password" placeholder="pass" id="password"></input>
        </fieldset>
        <button type="submit" className="login-button">open</button>
      </form>
    );
  }
}

export default LoginForm;

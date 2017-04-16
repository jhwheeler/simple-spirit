import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  render() {
    const queryParams = window.location.search.split("?");
    let errorMessage;
    console.log(queryParams.length);
    if (queryParams.length > 1) {
      errorMessage =
        (<div className="error-message">
          {decodeURI(queryParams[1])}
        </div>)
    } else {
      errorMessage = null;
    }
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
        <input type="submit" className="button" value="open"/>
        {errorMessage}
      </form>
    );
  }
}

export default LoginForm;

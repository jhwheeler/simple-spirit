import React from 'react';

import Header from './Header';
import LoginForm from './LoginForm';
import Menu from './Menu';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <div className="login-screen">
        <Header/>
        <LoginForm/>
        <Menu/>
      </div>
    );
  }
}

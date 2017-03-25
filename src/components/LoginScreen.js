import React from 'react';
import Header from './Header';
import Menu from './Menu';
import LoginForm from './LoginForm';

class LoginScreen extends React.Component {
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

export default LoginScreen;

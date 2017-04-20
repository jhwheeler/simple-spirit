import React from 'react';

import Header from './Header';
import RegisterForm from './RegisterForm';
import Menu from './Menu';

class RegisterScreen extends React.Component {
  render() {
    return (
      <div className="register-screen">
        <Header/>
        <RegisterForm/>
        <Menu/>
      </div>
    );
  }
}

export default RegisterScreen;

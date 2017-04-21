import React from 'react';
import Header from './Header';
import Console from './Console';
import Menu from './Menu';

export default class ConsoleScreen extends React.Component {
  render() {
    return (
      <div className="console-screen">
        <Header/>
        <Console/>
        <Menu/>
      </div>
    );
  }
}

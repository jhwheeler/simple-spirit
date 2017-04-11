import React from 'react';

import Header from './Header';
import Menu from './Menu';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Header/>
        <div className="row">
          <h2 className="about-header">About</h2>
        </div>
        <div className="row about-content">
          <p>Welcome to Simple Spirit.</p>
          <br/>
          <p>This space is here to help you listen to the silence. To help you connect with the beautifuly simplicity of Spirit.</p>
          <br/>
          <p>When you read a maxim, let it sink in. Read it a few times and be with the sounds. Then if you feel like it, you can click on "make it real". Here you'll find an exercise that will challenge you to put the wisdom of the maxim into action.</p>
        </div>
        <Menu/>
      </div>
    );
  }
}

export default About;

import React from 'react';

import Header from './Header';
import Menu from './Menu';

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Header/>
        <div className="row about-content">
          <div className="col-8 offset-2">
            <h2 className="about-header">About</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-10 offset-1">
            <p>Welcome to Simple Spirit.</p>
            <br/>
            <p>This space is here to help you listen to the silence. To help you connect with the beautifuly simplicity of Spirit.</p>
            <br/>
            <p>When you read a maxim, let it sink in. Read it a few times and be with the sounds. Then if you feel like it, you can click on "make it real". Here you'll find an exercise that will challenge you to put the wisdom of the maxim into action. You can then share your experience, which will be saved in your Diary once you sign up.</p>
          </div>
        </div>
        <Menu/>
      </div>
    );
  }
}

export default About;

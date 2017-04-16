import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="row">
          <div className="about-content">
            <p>Welcome to Simple Spirit.</p>
            <br/>
            <p>This space is here to help you listen to the silence. To help you connect with the beautifuly simplicity of Spirit.</p>
            <p>Read a maxim and let it sink in. Repeat it a few times and just be with the sounds.</p>
            <p>If you feel up for a challenge, click on "make it real". A challenge will appear to guide you to putting this wisdom into action. Throughout the day, try this practice and see what arises...</p>
            <Link to="/archive">
              <button className="button">Explore</button>
            </Link>
          </div>
        </div>
        <Menu/>
      </div>
    );
  }
}

export default About;

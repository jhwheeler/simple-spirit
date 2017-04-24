import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Menu from './Menu';

export default class About extends React.Component {
  render() {
    return (
      <div className="about">
        <Header/>
        <div className="row">
          <div className="about-content">
            <p>Welcome to Simple Spirit.</p>
            <br/>
            <p>This space is here to help you listen to the silence. To help you connect with the beautifuly simplicity of Spirit.</p>
            <p>Read a koan and let it sink in. Repeat it a few times and just be with the sounds.</p>
            <p>If you feel up for an exploration, click on "make it real". An inquiry will appear to guide you to putting this wisdom into action.</p>
            <p>Below the inquiry, you see "Write". This opens up a space for you to write with abandon.</p>
            <p>When you tap "Clear", your thoughts will be cleared away, not saved anywhere. Take this chance to simply let go...</p>
            <Link to="/koans">
              <button className="button">Explore</button>
            </Link>
          </div>
        </div>
        <Menu/>
      </div>
    );
  }
}
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
            <p>This space is here for you to listen to the silence. To connect with the beautiful simplicity of Spirit.</p>
            <p>Read an inquiry and let it sink in. Repeat it a few times and just be with the sounds.</p>
            <p>Below, you'll see "Write". This opens up a space for you to write with abandon.</p>
            <p>When you tap "Clear", your thoughts will be cleared away, not saved anywhere. Take this chance to simply let go...and enjoy the silence.</p>
            <Link to="/inquiries">
              <button className="button">Inquire Within</button>
            </Link>
          </div>
        </div>
        <Menu/>
      </div>
    );
  }
}

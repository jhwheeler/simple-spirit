import React from 'react';
import api from '../api';

import Header from './Header';
import Maxim from './Maxim';
import {Link} from 'react-router-dom';
import Menu from './Menu';

class Archive extends React.Component {
  constructor() {
    super();
    this.state = {
      maxims: []
    }
  }

  componentDidMount() {
    const maxims = [];
    api.getMaxims().end((error, res) => {
      this.setState({maxims: res.body})
    });
  }

  render() {
    let archive = this.state.maxims.map((maxim) => (
      <div className="col-8 offset-2 archive-item">
        <div className="archive-number">{maxim.maximId}.</div>
        <Link to={`maxim/${maxim.maximId}`}>
          <Maxim quote={maxim.maxim} />
        </Link>
      </div>
    ));

    if (archive.length < 1) {
      archive = <p>No maxims available.</p>
    }

    return (
      <div className="archive">
        <Header/>
        <div className="row">
          <div className="col-8 offset-2 archive-content">
            <h2 className="archive-header">Archive</h2>
          </div>
        </div>
        <div className="row">
        { archive }
        </div>
        <Menu/>
      </div>
    );
  }
}

export default Archive;

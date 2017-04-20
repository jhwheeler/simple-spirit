import React from 'react';
import api from '../api';

import Header from './Header';
import Koan from './Koan';
import {Link} from 'react-router-dom';
import Menu from './Menu';

class Archive extends React.Component {
  constructor() {
    super();
    this.state = {
      koans: null
    }
  }

  componentDidMount() {
    const koans = [];
    api.getKoans().end((error, res) => {
      this.setState({koans: res.body})
    });
  }

  render() {
    let archive;

    if (this.state.koans !== null) {
      archive = this.state.koans.map((koan) => (
        <div key={koan.koanId} className="archive-item">
          <div className="archive-link-container">
              <Koan link={`koan/${koan.koanId}`} quote={koan.koan} />
              <hr/>
          </div>
        </div>
      ));
    }

    if ((this.state.koans !== null) && (this.state.koans.length < 1)) {
      archive = <p>No koans available.</p>
    }

    return (
      <div className="archive">
        <Header/>
        <div className="row">
          <div className="archive-content">
            <h2 className="archive-header">Koans</h2>
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

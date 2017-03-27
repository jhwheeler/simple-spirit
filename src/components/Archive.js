import React from 'react';
import api from '../api';

import Header from './Header';
import ArchiveItem from './ArchiveItem';
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
    const archive = this.state.maxims.map((maxim) => (
      <ArchiveItem maxim={maxim}/>
    ));

    return (
      <div className="archive">
        <Header/>
        <div className="row">
          <div className="col-8 offset-2 archive-content">
            <h2 className="archive-header">Archive</h2>
          </div>
        </div>
        { archive }
        <Menu/>
      </div>
    );
  }
}

export default Archive;

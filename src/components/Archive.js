import React from 'react';
import api from '../api';
import { Link } from 'react-router-dom';

import Header from './Header';
import Maxim from './Maxim';
import Menu from './Menu';

const ArchiveItem = (props) => {
  const archiveLink = `/maxim/${props.maxim.maximId}`;

  return (
    <div className="archive-item">
      <div className="archive-number">
        {props.maxim.maximId}.
      </div>
      <Link to={archiveLink} className="archive-link">
        <Maxim quote={props.maxim.maxim} />
      </Link>
      {/*
      <div className="archive-date">
        {props.maxim.date}
      </div>
      */}
    </div>
  );
};

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
        { archive }
        <Menu/>
      </div>
    );
  }
}

export default Archive;

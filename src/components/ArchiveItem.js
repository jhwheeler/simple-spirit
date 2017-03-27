import React from 'react';
import { Link } from 'react-router-dom';

import Maxim from './Maxim';

const ArchiveItem = (props) => {
  const archiveLink = `/maxim/${props.maxim.maximId}`;

  return (
    <div className="row">
      <div className="col-8 offset-2 archive-item">
        <div className="archive-number">
          {props.maxim.maximId}.
        </div>
        <Link to={archiveLink} className="archive-link-container">
          <Maxim quote={props.maxim.maxim} />
        </Link>
      </div>
    </div>
  );
};

export default ArchiveItem;

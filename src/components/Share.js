import React from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../../public/images/share.png';

class Share extends React.Component {
    render() {
        return(
            <div className="share">
            <Link to="/" className="share-icon"><img src={shareIcon} /></Link>
            </div>
        );
    }
}

export default Share;

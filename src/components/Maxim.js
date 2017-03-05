import React from 'react';

class Maxim extends React.Component {
    render() {
        return(
            <div className="maxim">
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default Maxim;

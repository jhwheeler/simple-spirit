import React from 'react';

class Maxim extends React.Component {
    render() {
        return(
            <div className="hello">
                <h1>{this.props.content}!</h1>
            </div>
        );
    }
}

export default Maxim;

import React from 'react';

class Challenge extends React.Component {
    render() {
        return(
            <div className="challenge">
                <p>{this.props.content}</p>
            </div>
        );
    }
}

export default Challenge;

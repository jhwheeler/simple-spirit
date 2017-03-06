import React from 'react';

class Prompt extends React.Component {
    render() {
        return(
            <div className="prompt">
                <button className="prompt-button" onClick={() => this.props.onClick()}>make it real</button>
                <div className="arrow"></div>
            </div>
        );
    }
}

export default Prompt;
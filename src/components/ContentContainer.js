import React from 'react';
import Maxim from './Maxim';
import Challenge from './Challenge';
import Prompt from './Prompt';

class ContentContainer extends React.Component {
    constructor() {
        super();
        this.changeContent = this.changeContent.bind(this);
        this.state = {
            content: "maxim"
        }
    }

    changeContent(event) {
        console.log(this);
        let content = this.state.content;
        this.setState({ content: content == "challenge" ? "maxim" : "challenge"})
    }

    render() {
        let renderedContent = null;

        if (this.state.content == "challenge") {
            renderedContent = <Challenge content="The trick to presence is to listen to the space between the sounds." />;
        } else {
            renderedContent = <Maxim quote="Silence can be heard in every sound. All you need is to listen." />;
        }
            return (
                <div className="content-container">
                    {renderedContent}
                    <Prompt onClick={this.changeContent}/>
                </div>
            );
    }
}

export default ContentContainer;

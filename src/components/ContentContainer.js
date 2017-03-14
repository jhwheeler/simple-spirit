import React from 'react';
import Maxim from './Maxim';
import Challenge from './Challenge';
import Prompt from './Prompt';

class ContentContainer extends React.Component {
    constructor() {
        super();
        this.changeContent = this.changeContent.bind(this);
        this.state = {
            content: "maxim",
            prompt: "make it real"
        }
    }

    changeContent(event) {
        let content = this.state.content;
        let prompt = this.state.prompt;
        this.setState({ content: content == "challenge" ? "maxim" : "challenge"})
        this.setState({ prompt: content == "maxim" ? "back" : "make it real"})
    }

    render() {
        let renderedContent = null;
        if (this.state.content == "challenge") {
            renderedContent = <Challenge content="The trick to presence is to listen to the space between the sounds. Read this slowly... Take a second to look at the space between the words. Unfocus your eyes, let the shapes blur together, and see the surrounding space embracing these words." />;
        } else {
            renderedContent = <Maxim quote="Silence can be heard in every sound. All you need is to listen." />;
        }
            return (
                <div className="content-container">
                    {renderedContent}
                    <Prompt prompt={this.state.prompt} onClick={this.changeContent}/>
                </div>
            );
    }
}

export default ContentContainer;

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

    changeContent(e) {
        event.preventDefault();
        console.log("Clicked");
        //if (this.state.content == "maxim") {
            this.setState({ content: "challenge" })
        //} else {
         //   this.setState({ content: "maxim" })
        //}
    }

    render() {
        let content = this.state.content;
        let renderedContent = null;

        if (content = "maxim") {
            renderedContent = <Maxim quote="Silence can be heard in every sound. All you need is to listen." />;
        } else if (content = "challenge") {
            renderedContent = <Challenge content="The trick to presence is to listen to the space between the sounds.Unfocus your eyes for a second so the letters go blurry and the space between the words pops out.Relax your vision and allow the surrounding space to embrace these words..."/>;
        }
            return (
                <div className="content-container">
                    {renderedContent}
                    <Prompt onClick={(e) => this.changeContent(e)}/>
                </div>
            );
    }
}

export default ContentContainer;

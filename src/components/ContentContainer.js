import React from 'react';
import Maxim from './Maxim';
import Challenge from './Challenge';
import Prompt from './Prompt';
import api from '../api';

class ContentContainer extends React.Component {
  constructor() {
    super();
    this.changeContent = this.changeContent.bind(this);
    this.state = {
      content: "maxim",
      prompt: "make it real",
      maxim: {}
    }
  }

  changeContent(event) {
    let content = this.state.content;
    let prompt = this.state.prompt;
    this.setState({ content: content == "challenge" ? "maxim" : "challenge"})
    this.setState({ prompt: content == "maxim" ? "back" : "make it real"})
  }

  componentDidMount() {
    if (this.props && this.props.maximId) {
      api.getMaximById(this.props.maximId).end((error, res) => {
        this.setState({maxim: res.body})
      });

    } else {
      api.getLatestMaxim().end((error, res) => {
        this.setState({maxim: res.body[0]})
      });
    }
  }

  render() {
    let renderedContent = null;
    if (this.state.content == "challenge") {
      renderedContent = <Challenge content={this.state.maxim.challenge}/>;
    } else {
      renderedContent = <Maxim quote={this.state.maxim.maxim}/>;
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

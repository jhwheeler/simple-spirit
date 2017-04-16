import React from 'react';
import Maxim from './Maxim';
import Challenge from './Challenge';
import Prompt from './Prompt';
import api from '../api';
import {Link} from 'react-router-dom';

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
    this.setState({
      content: content == "challenge" ? "maxim" : "challenge"
    });
    this.setState({
      prompt: content == "maxim" ? "What is this?" : "make it real"
    });
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
      renderedContent = null;
    }
      return (
        <div className="content-container col-12">
          <div className="row">
            <Maxim quote={this.state.maxim.maxim}/>
            {renderedContent}
          </div>
          <div className="row">
            <Prompt prompt={this.state.prompt} onClick={this.changeContent}/>
          </div>
        </div>
      );
  }
}

export default ContentContainer;

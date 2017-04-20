import React from 'react';
import Koan from './Koan';
import Challenge from './Challenge';
import Prompt from './Prompt';
import api from '../api';
import {Link} from 'react-router-dom';

class ContentContainer extends React.Component {
  constructor() {
    super();
    this.changeContent = this.changeContent.bind(this);
    this.state = {
      content: "koan",
      prompt: "make it real",
      koan: {}
    }
  }

  changeContent(event) {
    let content = this.state.content;
    let prompt = this.state.prompt;
    this.setState({
      content: content == "challenge" ? "koan" : "challenge"
    });
    this.setState({
      prompt: content == "koan" ? "What is this?" : "make it real"
    });
  }

  componentDidMount() {
    if (this.props && this.props.koanId) {
      api.getKoanById(this.props.koanId).end((error, res) => {
        this.setState({koan: res.body})
      });
    } else {
      api.getLatestKoan().end((error, res) => {
        this.setState({koan: res.body[0]})
      });
    }
  }

  render() {
    let renderedContent = null;
    if (this.state.content == "challenge") {
      renderedContent = <Challenge content={this.state.koan.challenge}/>;
      prompt = <Link to="/about"><Prompt prompt={this.state.prompt} onClick={this.changeContent}/></Link>;
    } else {
      renderedContent = null;
      prompt = <Prompt prompt={this.state.prompt} onClick={this.changeContent}/>;
    }
      return (
        <div className="content-container col-12">
          <div className="row">
            <Koan quote={this.state.koan.koan}/>
            {renderedContent}
          </div>
          <div className="row">
            {prompt}
          </div>
        </div>
      );
  }
}

export default ContentContainer;

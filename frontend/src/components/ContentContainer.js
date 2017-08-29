import React from 'react';
import Koan from './Koan';
import Inquiry from './Inquiry';
import Prompt from './Prompt';
import api from '../api';
import {Link} from 'react-router-dom';

export default class ContentContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "koan",
      prompt: "make it real",
      koan: {}
    }
  }

  changeContent = event => {
    let content = this.state.content;
    let prompt = this.state.prompt;
    this.setState({
      content: content == "inquiry" ? "koan" : "inquiry"
    });
    this.setState({
      prompt: content == "koan" ? "What is this?" : "Make it real"
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
    if (this.state.content == "inquiry") {
      renderedContent = <Inquiry content={this.state.koan.inquiry}/>;
      prompt = <Link to="/"><Prompt prompt={this.state.prompt} onClick={this.changeContent}/></Link>;
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

import React from 'react';
import Header from './Header';
import Menu from './Menu';
import ContentContainer from './ContentContainer';

export default class App extends React.Component {
  render() {

  let koanId;

  if (this.props.match && this.props.match.params) {
    koanId = this.props.match.params.koanId;
  }

    return (
      <div className="main row">
        <Header/>
        <ContentContainer koanId={koanId}/>
        <Menu/>
      </div>
    );
  }
}

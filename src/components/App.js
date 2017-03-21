import React from 'react';
import Header from './Header';
import Menu from './Menu';
import ContentContainer from './ContentContainer';

class App extends React.Component {
  render() {

  let maximId;

  if (this.props.match && this.props.match.params) {
    maximId = this.props.match.params.maximId;
  }

    return (
      <div className="main">
        <Header/>
        <ContentContainer maximId={maximId}/>
        <Menu/>
      </div>
    );
  }
}

export default App;

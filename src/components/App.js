import React from 'react';
import Header from './Header';
import Menu from './Menu';
import ContentContainer from './ContentContainer';

class App extends React.Component {
    render() {
        return (
            <div className="main">
                <Header/>
                <ContentContainer/>
                <Menu/>
            </div>
        );
    }
}

export default App;

import React from 'react';
import Header from './Header';
import Maxim from './Maxim';
import Prompt from './Prompt';
import Menu from './Menu';
import ContentContainer from './ContentContainer';

class App extends React.Component {
    constructor() {
        super();
    }

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

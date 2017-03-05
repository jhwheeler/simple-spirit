import React from 'react';
import Header from './Header';
import Maxim from './Maxim';
import Prompt from './Prompt';
import Menu from './Menu';

class App extends React.Component {
    render() {
        return (
            <div className="main">
                <Header/>
                <Maxim content="Silence can be heard in every sound. All you need is to listen." />
                <Prompt/>
                <Menu/>
            </div>
        );
    }
}

export default App;

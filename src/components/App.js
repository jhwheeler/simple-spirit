import React from 'react';
import Header from './Header';
import Menu from './Menu';
import ContentContainer from './ContentContainer';

class App extends React.Component {
    constructor() {
        super();
        this.setHeaderImage = this.setHeaderImage.bind(this);
        this.state = {
            logoType: "logo"
        }
    }
    setHeaderImage(type) {
        if (this.state.logoType !== type) {
            this.setState({ logoType: type });
        }
    }
    render() {
        return (
            <div className="main">
                <Header logoType={this.state.logoType}/>
                <ContentContainer setHeader={(type) => this.setHeaderImage()}/>
                <Menu/>
            </div>
        );
    }
}

export default App;

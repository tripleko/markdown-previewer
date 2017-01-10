import React, { Component } from 'react';
import marked from 'marked';

class App extends Component {
    constructor() {
        super();
        this.state = {
            text: ""
        };
        this.textUpdate = this.textUpdate.bind(this);
    }

    textUpdate(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">Enter text:</div>
                    <div className="col">Markdown preview:</div>
                </div>
                <div className="row">
                    <p className="col">
                        <textarea className="panelText" onChange={this.textUpdate} value={this.state.text}></textarea>
                    </p>
                    <p className="col" dangerouslySetInnerHTML={{__html: marked(this.state.text)}}>
                    </p>
                </div>
            </div>
        );
    }
}

export default App;

import React, { Component } from 'react';
import cssClasses from './Person.css';


class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Insider Constructor', props);
        // another way to initialize the state
        // this.state = {......}
    }
    
    componentWillMount(){
        console.log('[Person.js] Insider componentWillMount');
    }

    componentDidMount(){
        console.log('[Person.js] Insider componentDidMount');
    }

    render() {
        console.log('[Person.js] Insider render');
        return (
            <div className={cssClasses.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
};

export default Person;

import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Insider Constructor', props);
        // another way to initialize the state
        // this.state = {......}
    }
    
    componentWillMount(){
        console.log('[Persons.js] Insider componentWillMount');
    }

    componentDidMount(){
        console.log('[Persons.js] Insider componentDidMount');
    }

    render() {
        console.log('[Persons.js] Insider render');
        
        return this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age} />
        })
    }
}

export default Persons;
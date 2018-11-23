import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
    constructor(props) {
        super(props);
        this.lastPersonRef = React.createRef();
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
        if(this.props.persons.length >0){
            this.lastPersonRef.current.focus();
        }
    }

    render() {
        // =============102 Ref API 1 =================
        // one way to use: forwardedRef
        return this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                forwardedRef={this.lastPersonRef}
                authenticated={this.props.isAuthenticated}
                position={index}
                changed={(event) => this.props.changed(event, person.id)}
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age} />
        })
        // =============102 Ref API 1 =================


        // // =============102 Ref API 2 =================
        // // another way to use: forwardedRef,
        // // combined with withClassNew Wrapper
        // return this.props.persons.map((person, index) => {
        //     return <Person
        //         key={person.id}
        //         ref={this.lastPersonRef}
        //         authenticated={this.props.isAuthenticated}
        //         position={index}
        //         changed={(event) => this.props.changed(event, person.id)}
        //         click={() => this.props.clicked(index)}
        //         name={person.name}
        //         age={person.age} />
        // })
        // // =============102 Ref API 2 =================
    }
}

export default Persons;
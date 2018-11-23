import React, { Component } from 'react';
import cssClasses from './Person.css';
// import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import withClassNew from '../../../hoc/withClassNew';

class Person extends Component {
    render() {
        return (
            // <WithClass classes={cssClasses.Person}>
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
            // </WithClass>

        )

        // another way: returing array of elements
        // return [
        //     <p key="1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
        //     <p key="2">{this.props.children}</p>,
        //     <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
        // ]
    }
};

export default withClassNew(Person, cssClasses.Person);

import React from 'react';
import cssClasses from './Person.css';
import WithClass from '../../../hoc/WithClass';

const person = (props) => {
    return (
        <WithClass classes={cssClasses.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </WithClass>
    )

    // another way: returing array of elements
    // return [
    //     <p key="1" onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>,
    //     <p key="2">{props.children}</p>,
    //     <input key="3" type="text" onChange={props.changed} value={props.name} />
    // ]

};

export default person;

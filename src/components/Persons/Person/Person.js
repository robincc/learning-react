import React from 'react';
import cssClasses from './Person.css';

const person = (props) => {
    return (
        <div className={cssClasses.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )

    // another way: returing array of elements
    // return [
    //     <p key="1" onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>,
    //     <p key="2">{props.children}</p>,
    //     <input key="3" type="text" onChange={props.changed} value={props.name} />
    // ]

};

export default person;

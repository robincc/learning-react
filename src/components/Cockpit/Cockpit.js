import React from 'react';

import cssClasses from './Cockpit.css';
import Aux from '../../hoc/Aux'; 

const cockpit = (props) => {
    const classes = [];
    let btnClass = cssClasses.Button;

    if (props.showPersons) {
        btnClass = [cssClasses.Red, cssClasses.Button].join(' ');
    }

    if (props.persons.length <= 2) {
        classes.push(cssClasses.red);
    }
    if (props.persons.length <= 1) {
        classes.push(cssClasses.bold);
    }

    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is really working! </p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Person</button>
            <button onClick={props.login}>Log In</button>
        </Aux>
    );
}

export default cockpit;
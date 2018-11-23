import React from 'react';

import cssClasses from './Cockpit.css';

const cockpit = (props) => {
    const classes = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = cssClasses.Red;
    }

    if (props.persons.length <= 2) {
        classes.push(cssClasses.red);
    }
    if (props.persons.length <= 1) {
        classes.push(cssClasses.bold);
    }

    return (
        <div className={cssClasses.Cockpit}>
            <h1>{props.appTitle}</h1>
            <p className={classes.join(' ')}>This is really working! </p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Person</button>
        </div>
    );
}

export default cockpit;
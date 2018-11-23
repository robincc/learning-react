import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    return props.persons.map((person, index) => {
        return <Person
            key={person.id}
            position={index}
            changed={(event) => props.changed(event, person.id)}
            click={() => props.clicked(index)}
            name={person.name}
            age={person.age} />
    })
}

export default persons;
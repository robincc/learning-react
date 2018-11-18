import React, { Component } from 'react';
// import logo from './logo.svg';
import cssClasses from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
    state = {
        persons: [
            { id: 'personid1', name: 'Max', age: 28 },
            { id: 'personid2', name: 'Manu', age: 29 },
            { id: 'personid3', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    };

    switchNameHandler = (newName) => {
        // DON'T DO THIS
        // this.state.persons[0].name = "Maximilian";

        this.setState({
            persons: [
                { name: newName, age: 28 },
                { name: 'Manu', age: 29 },
                { name: 'Stephanie', age: 27 }
            ]
        });
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p) => {
            return p.id === id;
        });

        const person = { ...this.state.persons[personIndex] };
        // const person = Object.assign({}, this.state.persons[personIndex]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons;
        // above method returing original reference, which could be modified

        // below two methods, copy original data
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];

        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    togglePersonsHandler = () => {
        this.setState({ showPersons: !this.state.showPersons });
    }

    render() {
        const rnd = Math.random();

        if (rnd > 0.7) {
            throw new Error('something went wrong with random()');
        }

        let persons = null;
        let btnClass = '';

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary key={person.id}><Person
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age} />
                        </ErrorBoundary>
                    })}
                </div>
            );

            btnClass = cssClasses.Red;
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push(cssClasses.red);
        }
        if (this.state.persons.length <= 1) {
            classes.push(cssClasses.bold);
        }

        return (
            <div className={cssClasses.App}>
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working! </p>
                {/* method below could be inefficient */}
                <button
                    className={btnClass}
                    onClick={this.togglePersonsHandler}>Toggle Person</button>
                {persons}
            </div>
        );
        // Equal to below
        // return React.createElement('div', {className, 'App'}, React.createElement('h1', 'I\'m a React App'))
    }
}

export default App;

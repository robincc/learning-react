import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

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

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Stephanie', age: 26 }
            ]
        });
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
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            key={person.id}
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age} />
                    })}
                </div>
            );
        }


        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working! </p>
                {/* method below could be inefficient */}
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Person</button>
                {persons}
            </div>
        );
        // Equal to below
        // return React.createElement('div', {className, 'App'}, React.createElement('h1', 'I\'m a React App'))
    }
}

export default App;

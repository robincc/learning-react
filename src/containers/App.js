import React, { Component } from 'react';
// import logo from './logo.svg';
import cssClasses from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClassNew from '../hoc/withClassNew';

export const AuthContext = React.createContext(false);

class App extends Component {
    state = {
        persons: [
            { id: 'personid1', name: 'Max', age: 28 },
            { id: 'personid2', name: 'Manu', age: 29 },
            { id: 'personid3', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false,
        authenticated: false,
        toggleClicked: 0
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
        // incorrect way to setState.. this.state.showPersons might not be correct... racing condition
        // this.setState({
        //     showPersons: !this.state.showPersons,
        //     toggleClicked: this.state.toggleClicked + 1
        // });

        // correct way to setState
        this.setState((prevState, props) => {
            return {
                showPersons: !prevState.showPersons,
                toggleClicked: prevState.toggleClicked + 1
            }
        });
    }

    loginHandler = () => {
        this.setState({ authenticated: true });
    }

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                    // isAuthenticated={this.state.authenticated}
                />
            );
        }

        return (
            // <WithClass classes={cssClasses.App} >
            <Aux>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                    login={this.loginHandler}
                />
                <AuthContext.Provider value={this.state.authenticated}>
                    {persons}
                </AuthContext.Provider>
            </Aux>
            // </WithClass>
        );
        // Equal to below
        // return React.createElement('div', {className, 'App'}, React.createElement('h1', 'I\'m a React App'))
    }
}

export default withClassNew(App, cssClasses.App);

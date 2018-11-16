import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value'
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

    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working! </p>
                {/* method below could be inefficient */}
                <button onClick={ () => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    // method below recommended
                    click={this.switchNameHandler.bind(this, 'Max!')}> My Hobbies: Racing</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age} />
            </div>
        );
        // Equal to below
        // return React.createElement('div', {className, 'App'}, React.createElement('h1', 'I\'m a React App'))
    }
}

export default App;

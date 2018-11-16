import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working! </p>
                <Person name="max" age="28" />
                <Person name="Manu" age="28"> My Hobbies: Racing</Person>
                <Person name="Stephanie" age="27" />
            </div>
        );
        // Equal to below
        // return React.createElement('div', {className, 'App'}, React.createElement('h1', 'I\'m a React App'))
    }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 30 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 500 },
        { name: 'Manu', age: 29 },
        { name: 'El Guey', age: 30333 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Max', age: 500 },
        { name: event.target.value, age: 29 },
        { name: 'El Guey', age: 30333 }
      ]
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>I'm a react app!</h1>
        <p>This is really working! </p>
        <button onClick={this.switchNameHandler.bind(this, 'Maximo')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'El Cholos')}
          changed={this.nameChangedHandler}
        >
          My Hobbies: eat hot dogs and racing.
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler}
        />
      </div>
    );
  }
}

export default App;

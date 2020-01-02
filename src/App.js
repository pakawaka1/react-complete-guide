import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 30 }
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Maxilimian', age: 500 },
        { name: 'Manu', age: 29 },
        { name: 'El Guey', age: 30333 }
      ]
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>I'm a react app!</h1>
        <p>This is really working! </p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My Hobbies: eat hot dogs and racing.
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;

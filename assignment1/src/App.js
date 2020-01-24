import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './UserInput';
import './UserOutput';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {

  state = {
    usernames: [
      'testuser1',
      'testuser2'
    ]
  };

  updateUsernames = (event) => {
    this.setState({
      usernames: [
        event.target.value,
        'testuser555'
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput update={this.updateUsernames} username={this.state.usernames[0]}/>
        <UserOutput username={this.state.usernames[0]} />
        <UserOutput username={this.state.usernames[1]} />
      </div>
    );
  }
}

export default App;

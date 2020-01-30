import React, { Component } from 'react';
import classes from '../containers/App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[app.js] constructor');
  }

  state = {
    persons: [
      {id: 'asd33rf', name: 'Taylor', age: 30},
      {id: 'asd34rf', name: 'Alia', age: 30},
      {id: 'asd35rf', name: 'Autzen', age: 4},
      {id: 'asd36rf', name: 'Walter', age: 2},
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[app.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[app.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[app.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[app.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[app.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    // const person = Object.assign({}, this.state.persons[personIndex]); same as above

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); //copies persons array into new one
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[app.js] render');

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>;

    }

    return (
      <div className={classes.App}>
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App; //higher order component

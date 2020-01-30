import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps() {
  //   console.log('[persons.js] getDerivedStateFromProps');
  // }

  // componentWillReceiveProps(props) {
  //   console.log('[persons.js] componeWillReceiveProps', props);
  // }

  // componentWillUpdate() {

  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('[persons.js] rendering...');

    return this.props.persons.map((person, index) => {
          return <Person 
            click={() => this.props.clicked(index)}
            name={person.name} 
            age={person.age} 
            key={person.id} 
            changed={(event) => this.props.changed(event, person.id)}/>
    });
  }
}
export default Persons;
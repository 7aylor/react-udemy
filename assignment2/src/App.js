import React from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends React.Component {

  state = {
    value: '',
    length: 0
  }

  inputChangeHandler = (event) => {
    this.setState({value: event.target.value, length: event.target.value.length});
  }

  deleteCharHandler = (index) => {
    let charsArr = this.state.value.split('');
    charsArr.splice(index, 1);
    this.setState({value: charsArr.join(''), length: charsArr.length});
  }

  render() {

    let chars = null;

    if(this.state.length > 0) {
      chars = (
        <div>
          {
            this.state.value.split('').map((val, index) => {
              return <Char click={() => this.deleteCharHandler(index)} value={val} key={index}/>
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <input type="text" onChange={(event) => this.inputChangeHandler(event)} value={this.state.value}/>
        <p>{this.state.length}</p>
        <Validation length={this.state.length} />
        {chars}
      </div>
    );
  }
}

export default App;

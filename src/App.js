import React, {Component} from 'react';
import Header from './Components/Header';
import './App.css';


class App extends Component() {
  constructor(){
    super()

  }
  render(){
  return (
    <div className="App">
      <Header/>
    </div>
  );
  }
}

export default App;

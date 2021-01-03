import React, {Component} from 'react';
import axios from 'axios';
import Header from './Components/Header';
// import Outfit from '/Components/Cart';
import './App.css';


class App extends Component() {
  constructor(){
    super()
    this.state = {
    clothes: []
  }
} 
componentDidMount(){
  this.getClothes()
}
  render(){
  return (
    <div className="App">
      <Header/>
      {/* <Outfit/> */}
    </div>
   );
  }
}

export default App;

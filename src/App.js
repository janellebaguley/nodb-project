import React, {Component} from 'react';
import axios from 'axios';
import Header from './Components/Header';
// import Outfit from '/Components/Cart';
import './App.css';


class App extends Component() {
  constructor(){
    super()
    this.state = {
    clothes: {
      tops: [],
      bottoms: [],
      shoes: [],
      hats: []
    }
  }
} 
componentDidMount(){
  this.getClothes()
}
handleInputs = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  })
}
getClothes = () => {
  axios.get('/api/clothes')
  .then(res => {
    this.setState({clothes: res.data})
  })
  .catch(err => console.log(err));
}
addClothes =() =>
  axios.post('/api/clothes')
  .then(res => {
    this.setState({clothes: res.data, 
      tops: [],
      bottoms: [],
      shoes: [],
      hats: []})
    })
    .catch(err => console.log(err))
  }

  render(){
  return (
    <div className="App">
      <header className = 'App-header'>
        <h1>Accessorize Yourself!</h1>
      </header>
      <Header/>
      {/* <Outfit/> */}
    </div>
   );
  }
}

export default App;

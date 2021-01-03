import React, {Component} from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Cart from '/Components/Cart';
import Outfit from '/Components/Outfit';
import './App.css';
import { removeFromCart } from '../server/Controller';


class App extends Component() {
  constructor(rops){
    super()
    this.state = {
    clothesInCart: []
  }
  this.clothesInCart = this.clothesInCart.bind(this);
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
    this.setState({clothesInCart: res.data})
  })
  .catch(err => console.log(err));
}
addClothes =() =>
  axios.post('/api/clothes')
  .then(res => {
    this.setState({clothesInCart: res.data, 
      tops: [],
      bottoms: [],
      shoes: [],
      hats: []})
    })
    .catch(err => console.log(err))
  }
  editSize= (id, newSize) => {
    let body = {size: newSize};
    axios.put(`/api/clothes/${id}`, body)
    .then(res => {
      this.setState({clothesInCart: res.data})
    })
    .catch(err => console.log(err))
  }
  removeFromCart= (id) => {
    axios.delete(`/api/clothes/${id}`)
    .then(res => {
      this.setState({clothesInCart: res.data})
    })
    .catch(err => console.log(err))
  }
  render(){
  return (
    <div className="App">
      <Header/>
      <Outfit/>
      <Cart/>
    </div>
   );
  }
}

export default App;

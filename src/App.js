import React, {Component} from 'react';
import Header from './Components/Header';
import Cart from './Components/Cart';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    clothes: {
      tops: [],
      bottoms: [],
      shoes: [],
      hats: [],
      i: 0
    }
  }
  this.addClothes = this.addClothes.bind(this);
  this.getClothes = this.getClothes.bind(this);
} 
componentDidMount(){
  axios.get('/api/clothes')
  .then(res => {
    this.setState({clothes: res.data})
  })
  .catch(err => console.log(err))
}

getClothes = () => {
  axios.get('/api/clothes')
  .then(res => {
    this.setState({clothes: res.data})
  })
  .catch(err => console.log(err))
}

addClothes =() => {
  axios.post('/api/clothes', {tops: this.state.tops, bottoms: this.state.bottoms, shoes: this.state.shoes, hats: this.state.hats})
  .then(res => {
    this.setState({clothes: res.data, 
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
};
removeFromCart= (id) => {
    axios.delete(`/api/clothes/${id}`)
    .then(res => {
      this.setState({clothesInCart: res.data})
    })
    .catch(err => console.log(err))
  };

  render(){
    const clothes = this.state.clothes;
    const tops = this.state.clothes.tops;
    const bottoms = this.state.clothes.bottoms;
    const shoes = this.state.clothes.shoes;
    const hats = this.state.clothes.hats
  return (
    <div className="App">
      <Header/>
      <h2>Cart</h2>
      <Cart/>     
    </div>
   );
  }
}
export default App;

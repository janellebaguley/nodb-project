import React, {Component} from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Cart from '/Components/Cart';
import './App.css';


class App extends Component() {
  constructor(props){
    super(props)
    this.state = {
    clothesInCart: []
  }
  this.clothesInCart = this.addClothes.bind(this);
} 
componentDidMount(){
  axios.get('/api/clothes')
  .then(res => {
    this.setState({clothesInCart: res.data})
  })
  .catch(err => console.log(err))
}

addClothes = () =>
  axios.post('/api/clothes', {tops: this.state.tops, bottoms: this.state.bottoms, shoes: this.state.shoes, hats: this.state.hats})
  .then(res => {
    this.setState({clothes: res.data, 
      tops: [],
      bottoms: [],
      shoes: [],
      hats: []})
    })
    .catch(err => console.log(err))
  };
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
  return (
    <div className="App">
      <Header/>
      <Cart/>
    </div>
   );
  }
}
export default App;

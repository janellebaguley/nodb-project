import React, {Component} from 'react';
import Header from './Components/Header';
import Cart from './Components/Cart';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    clothes: []
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
    console.log(this.state.clothes)
  return (
    <div className="App">
      <Header/>
      {/* the ? is called optional chaining, I believe and the following was done so that we didn't end up having an error render, as it wasn't finding clothes at first. */}
      <div>{this.state.clothes[0]?.tops?.map((top, i) => (
        <section key ={i} className = 'box'>
          <p>{top.tops}</p>
          <p>{top.size}</p>
        </section>
       ))}
       </div>
       <div>
       {this.state.clothes[0]?.bottoms?.map((bottom, i) => (
        <section key ={i} className = 'box'>
          <p>{bottom.bottoms}</p>
          <p>{bottom.size}</p>
        </section>
       ))}
       </div>
       <div>
        {this.state.clothes[0]?.shoes?.map((shoe, i) => (
        <section key ={i} className = 'box'>
          <p>{shoe.shoes}</p>
          <p>{shoe.size}</p>
        </section>
       ))}
       </div>
       <div>
       {this.state.clothes[0]?.hats?.map((hat, i) => (
        <section key ={i} className = 'box'>
          <p>{hat.hats}</p>
          <p>{hat.size}</p>
        </section>
       ))}
       </div>
      <h2>Cart</h2>
      <Cart
      clothes={this.state.clothes}
      editSizeFn = {this.editSize}
      removeFn = {this.removeFromCart}/>
    </div>
   );
  }
}
export default App;

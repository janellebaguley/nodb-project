import React, {Component} from 'react';
import Header from './Components/Header';
import Cart from './Components/Cart';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    clothes: [],
    cart: []
  }
  this.addToCart = this.addToCart.bind(this);
  this.getClothes = this.getClothes.bind(this);
  this.removeFromCart = this.removeFromCart.bind(this)
} 
componentDidMount(){
  axios.get('/api/clothes')
  .then(res => {
    this.setState({clothes: res.data})
  })
  .catch(err => console.log(err))
  axios.get('/api/cart')
  .then(res => {
    this.setState({cart: res.data})
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

editSize= (id, newSize) => {
  let body = {size: newSize};
  axios.put(`/api/clothes/${id}`, body)
  .then(res => {
    this.setState({clothesInCart: res.data})
  })
  .catch(err => console.log(err))
};

removeFromCart= (id) => {
  axios.delete(`/api/cart/${id}`)
  .then(res => {
    this.setState({cart: res.data})
  })
  .catch(err => console.log(err))
};

addToCart = (cart) => {
  axios.post('/api/cart', {item: cart})
  .then(res => {
    this.setState({cart: res.data})
  })
  .catch(err => console.log(err))
  // let cartC = [...this.state.cart];
  // cartC.push(cart)

  // this.setState({cart: cartC})
}
  render(){
    console.log(this.state.cart)
  return (
    <div className="App">
      <Header/>
      {/* the ? is called optional chaining, I believe and the following was done so that we didn't end up having an error render, as it wasn't finding clothes at first. */}
      <div>{this.state.clothes[0]?.tops?.map((top, i) => (
        <section key ={i} className = 'box'>
          <p>{top.tops}</p>
          <p>{top.size}</p>
          <button onClick = {() => this.addToCart(top)}>addToCart</button>
        </section>
       ))}
       </div>
       <div>
       {this.state.clothes[0]?.bottoms?.map((bottom, i) => (
        <section key ={i} className = 'box'>
          <p>{bottom.bottoms}</p>
          <p>{bottom.size}</p>
          <button onClick = {() => this.addToCart(bottom)}>addToCart</button>
        </section>
       ))}
       </div>
       <div>
        {this.state.clothes[0]?.shoes?.map((shoe, i) => (
        <section key ={i} className = 'box'>
          <p>{shoe.shoes}</p>
          <p>{shoe.size}</p>
          <button onClick = {() => this.addToCart(shoe)}>addToCart</button>
        </section>
       ))}
       </div>
       <div>
       {this.state.clothes[0]?.hats?.map((hat, i) => (
        <section key ={i} className = 'box'>
          <p>{hat.hats}</p>
          <p>{hat.size}</p>
          <button onClick = {() => this.addToCart(hat)}>addToCart</button>
        </section>
       ))}
       </div>
      <h2>Cart</h2>
      <Cart
      clothes={this.state.clothes}
      cart={this.state.cart}
      addToCart ={this.addToCart}
      editSizeFn = {this.editSize}
      removeFromCart = {this.removeFromCart}/>
    </div>
   );
  }
}
export default App;

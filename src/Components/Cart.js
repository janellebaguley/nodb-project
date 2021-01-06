import React, {Component} from 'react';
import './Cart.css';

class Cart extends Component {
    constructor(props){
      super(props)
      this.state ={
        sizeInput: ''
  }
 }
 
handleInput = (val) => {
    this.setState({sizeInput: val})
}
handleEdit = (id) => {
  this.props.editSize(id, this.state.sizeInput)
  this.setState({sizeInput: ''})
}


    render(){
      console.log(this.props.cart)
    return (
      <div>
        {this.props.cart.filter(element => element.tops).map((top, i) => (
        <section key ={i}>
          <p>{top.tops}</p>
          <p>{top.size}</p>
          <div><input className = 'input-box' value = {this.state.sizeInput} onChange ={e => this.handleInput(e.target.value)}/></div>
          <button onClick = {() => this.handleEdit(top.id)}>EditSize</button>
          <button onClick ={() => this.props.removeFromCart(top)}>Delete</button>
        </section>
       ))}
       {this.props.cart.filter(element => element.bottoms).map((bottom, i) => (
        <section key ={i}>
           <p>{bottom.bottoms}</p>
          <p>{bottom.size}</p>
          <div><input className = 'input-box' value = {this.state.sizeInput} onChange ={e => this.handleInput(e.target.value)}/></div>
          <button onClick = {() => this.handleEdit(bottom.id)}>EditSize</button>
          <button onClick ={() => this.props.removeFromCart(bottom)}>Delete</button>
        </section>
       ))}
        {this.props.cart.filter(element => element.shoes).map((shoe, i) => (
        <section key ={i}>
          <p>{shoe.shoes}</p>
          <p>{shoe.size}</p>
          <div><input className = 'input-box' value = {this.state.sizeInput} onChange ={e => this.handleInput(e.target.value)}/></div>
          <button onClick = {() => this.handleEdit(shoe.id)}>EditSize</button>
          <button onClick ={() => this.props.removeFromCart(shoe)}>Delete</button>
        </section>
       ))}
        {this.props.cart.filter(element => element.hats).map((hat, i) => (
        <section key ={i}>
          <p>{hat.hats}</p>
          <p>{hat.size}</p>
          <div><input className = 'input-box' value = {this.state.sizeInput} onChange ={e => this.handleInput(e.target.value)}/></div>
          <button onClick = {() => this.handleEdit(hat.id)}>EditSize</button>
          <button onClick ={() => this.props.removeFromCart(hat)}>Delete</button>
        </section>
       ))}
      </div>
    );
  }
}

export default Cart;
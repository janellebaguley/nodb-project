import React, {Component} from 'react';
import axios from 'axios';

class Cart extends Component {
    constructor(props){
      super(props)
      this.state ={
        size: []
  }
 }
handleInput = (val) => {
    this.setState({sizeInput: val})
}
handleEdit = (id) => {
  this.props.sizeFn(id, this.state.sizeInput)
}


    render(){
      console.log(this.props.cart)
    return (
      <div>
        <div>{this.props.cart.filter(element => element.tops).map((top, i) => (
        <section key ={i} className = 'box'>
          <p>{top.tops}</p>
          <p>{top.size}</p>
          <button>EditSize</button>
          <button onClick ={() => this.props.removeFromCart(top)}>Delete</button>
        </section>
       ))}
       </div>
       <div>{this.props.cart.filter(element => element.bottoms).map((bottom, i) => (
        <section key ={i} className = 'box'>
           <p>{bottom.bottoms}</p>
          <p>{bottom.size}</p>
          <button>EditSize</button>
          <button onClick ={() => this.props.removeFromCart(bottom)}>Delete</button>
        </section>
       ))}
       </div>
       <div>
        {this.props.cart.filter(element => element.shoes).map((shoe, i) => (
        <section key ={i} className = 'box'>
          <p>{shoe.shoes}</p>
          <p>{shoe.size}</p>
          <button>EditSize</button>
          <button onClick ={() => this.props.removeFromCart(shoe)}>Delete</button>
        </section>
       ))}
       </div>
       <div>
        {this.props.cart.filter(element => element.hats).map((hat, i) => (
        <section key ={i} className = 'box'>
          <p>{hat.hats}</p>
          <p>{hat.size}</p>
          <button>EditSize</button>
          <button onClick ={() => this.props.removeFromCart(hat)}>Delete</button>
        </section>
       ))}
       </div>
        {/* <section>
          <input value = {this.state.sizeInput} name = 'size' onChange={e => this.handleInput(e.target.value)}/>
          <button onClick ={this.updateSize}>Update</button>
        </section> */}
      </div>
    );
  }
}

export default Cart;
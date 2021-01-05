import React, {Component} from 'react';

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
        </section>
       ))}
       </div>
       <div>{this.props.cart.filter(element => element.bottoms).map((bottom, i) => (
        <section key ={i} className = 'box'>
           <p>{bottom.bottoms}</p>
          <p>{bottom.size}</p>
        </section>
       ))}
       </div>
       <div>
        {this.props.cart.filter(element => element.shoes).map((shoe, i) => (
        <section key ={i} className = 'box'>
          <p>{shoe.shoes}</p>
          <p>{shoe.size}</p>
        </section>
       ))}
       </div>
       <div>
        {this.props.cart.filter(element => element.hats).map((hat, i) => (
        <section key ={i} className = 'box'>
          <p>{hat.hats}</p>
          <p>{hat.size}</p>
        </section>
       ))}
       </div>
        {/* <section>
          <input value = {this.state.sizeInput} name = 'size' onChange={e => this.handleInput(e.target.value)}/>
          <button onClick ={this.updateSize}>Update</button>
          <button onClick ={this.removeFromCart}>Delete</button> 
        </section> */}
      </div>
    );
  }
}

export default Cart;
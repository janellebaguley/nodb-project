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
addToCart =() => {
  // let cart = addClothes()
}
    render(){
    return (
      <div>
        <section>
          <input value = {this.state.sizeInput} name = 'size' onChange={e => this.handleInput(e.target.value)}/>
          <button onClick ={this.updateSize}>Update</button>
          <button onClick ={this.removeFromCart}>Delete</button> 
        </section>
      </div>
    );
  }
}

export default Cart;
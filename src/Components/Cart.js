import React, {Component} from 'react';

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
  this.props.sizeFn(id, this.state.sizeInput)
}
    render(){
    return (
      <div>
        <section>
          {/* <input value = {sizeFn} name = 'size' onChange={e => this.handleInput(e)}/> */}
          <button onClick ={this.updateSize}>Update</button>
          <button onClick ={this.removeFromCart}>Delete</button> 
        </section>
      </div>
    );
  }
}

export default Cart;
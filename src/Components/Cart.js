import React, {Component} from 'react';
import Outfit from './Outfit';

class Cart extends Component() {
    constructor(props){
      super(props)
      this.state ={
        size: this.props.clothes.size
      }
  }
handleInputs = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

    render(){
      const {size} = this.state;
      const {clothes} = this.props;
    return (
      <div>
        <section>
          <input value = {size} name = 'size' onChange={e => this.handleInputs(e)}/>
          <button onClick ={this.updateSize}>Update</button>
        </section>
        <section>
          <h4>{clothes.tops}</h4>
          <h4>{clothes.bottoms}</h4>
          <h4>{clothes.shoes}</h4>
          <h4>{clothes.hats}</h4>
          <button onClick ={this.removeFromCart}>Delete</button> 
        </section>
      </div>
    );
    }
  }
}
export default Cart;
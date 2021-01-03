import React, {Component} from 'react';
import axios from 'axios';

class Cart extends Component() {
    constructor(props){
      super(props)
      this.state ={
        tops: this.props.clothes.tops,
        bottoms: this.props.clothes.bottoms,
        shoes: this.props.clothes.shoes,
        hats: this.props.clothes.hats,
        size: this.props.clothes.size
      }
  }
  handleInputs = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}
updateSize = () => {
  axios.put(`/api/clothes/${this.props.clothes.id}`, {tops: this.state.tops, bottoms: this.state.bottoms, shoes: this.state.shoes, hats: this.state.hates, size: this.state.size})
  .then(() => {this.props.editSizeFn()
  this.setState({
      size: []
  })
})
removeFromCart = () => {
  axios.delete(`/api/clothes/${this.props.clothes.id}`)
  .then(() => this.props.removeFromCartFn())
  .catch(err => console.log(err));
}
    render(){
      const {size, tops, bottoms, shoes, hats} = this.state;
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
import React from 'react';
import axios from 'axios';
import Cart from './Cart';

const Outfit = props => {
    const mappedClothes = props.clothesInCart.map((cart, i) => (
        <Cart 
            key={i}
            clothes={clothes}
            editSizeFn={props.editSizeFn}
            removeFromCartFn={props.removeFromCartFn}/>
    ))

    return (
        <div>
            <h1>Cart</h1>
            <section>
                {mappedClothes}
            </section>
        </div>
    )
}

export default Outfit;